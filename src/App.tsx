import NavBar from "../src/components/ui/NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cv from "./pages/Cv";
import Demo from "./pages/Demo";
import Github from "./pages/Github";
import Contacto from "./pages/Contacto";

function App() {
	return (
		<>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/portfolio" element={<Demo />} />
					<Route path="/cv" element={<Cv />} />
					<Route path="/github" element={<Github />} />
					<Route path="/contacto" element={<Contacto />} />
					<Route path="*" element={<p>La página no existe.</p>} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
