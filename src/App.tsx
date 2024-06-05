import NavBar from "../src/components/ui/NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Cv from "./pages/Cv";
import Demo from "./pages/Demo";
import Github from "./pages/Github";
import Contacto from "./pages/Contacto";
import Language from "./components/ui/Language";

function App() {
	let selectedLanguage = window.localStorage.getItem("langu");
	if (!selectedLanguage || !["es", "en"].includes(selectedLanguage))
		selectedLanguage = "es";

	const [language, setLanguage] = useState(selectedLanguage);

	useEffect(() => {
		window.localStorage.setItem("langu", language);
	}, [language]);

	return (
		<>
			<Router>
				<Language
					language={language}
					handleLangSelect={(lang) => setLanguage(lang)}
				/>
				<NavBar language={language} />
				<Routes>
					<Route path="/" element={<Home language={language} />} />
					<Route path="/portfolio" element={<Demo language={language} />} />
					<Route path="/cv" element={<Cv language={language} />} />
					<Route path="/github" element={<Github language={language} />} />
					<Route path="/contacto" element={<Contacto language={language} />} />
					<Route
						path="*"
						element={
							<p className="page-error">
								{language === "es"
									? "La página no existe."
									: "This webpage doesn't exist."}
							</p>
						}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
