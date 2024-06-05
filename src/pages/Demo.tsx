import WebExample from "../components/WebExample";
import imgUrlShortening from "../assets/images/url-shortening.jpeg";
import imgAdviceGenerator from "../assets/images/advice-generator.jpg";
import imgLandingPage from "../assets/images/landing-page.jpg";
import imgFaqAccordion from "../assets/images/faq-accordion.jpg";
import imgTimeTracker from "../assets/images/time-tracker.jpg";
import imgECommerce from "../assets/images/e-commerce.jpg";

interface Props {
	language: string;
}

const Demo = ({ language }: Props) => {
	return (
		<main>
			<div className="main-title main-title-dark">
				<h1>Portfolio</h1>
				<p>
					{language === "es"
						? "Los siguientes ejemplos han sido desarrollados en base a ejercicios de la web Front End Mentor. Si bien los diseños son obtenidos de esa web, y como verán el código está en inglés (refiriéndome principalmente las clases y los nombres de las funciones), todo ello fue escrito por mi. Esto se debe a que los cursos que he hecho siempre fueron en inglés, y dado que los tags de los elementos están en inglés, me acostumbré a escribir el resto del código tabién de esa manera."
						: "The following examples have been developed based on exercises from the Front End Mentor website. Although the designs are obtained from that website, and as you will see the code is in English (referring mainly to the classes and function names), all of it was written by me. This is because the courses I have taken have always been in English, and since the tags of the elements are in English, I got used to writing the rest of the code in the same way."}
				</p>
			</div>
			<WebExample
				title="• E-Commerce Product Page"
				description={
					language === "es"
						? "Reproducción en React de una product page, con funcionabilidad que permite agregar y quitar el producto del carro."
						: "Reproduction in React of a product page, with functionality that allows adding and removing the product from the cart."
				}
				github="https://github.com/federuttkay/e-commerce"
				image={imgECommerce}
				url="https://e-commerce-federico.netlify.app/"
				language={language}
			/>
			<WebExample
				title="• URL Shortening App"
				description={
					language === "es"
						? "Reproducción en React de una aplicación de reducción de URL. La funcionabilidad está implementada pero puede que los permisos de la API no estén activos."
						: "Reproduction in React of a URL shortening app. The functionality is implemented, but the API permissions may not be active."
				}
				github="https://github.com/federuttkay/react_url-shortening-app"
				image={imgUrlShortening}
				url="https://url-shortening-app-federico.netlify.app/"
				language={language}
			/>
			<WebExample
				title="• Landing Page con Menús"
				description={
					language === "es"
						? "Reproducción en React de una landing page, incluyendo los menús de la barra de navegación."
						: "Reproduction in React of a landing page, including the navigation bar menus."
				}
				github="https://github.com/federuttkay/landing-page"
				image={imgLandingPage}
				url="https://landing-page-federico.netlify.app/"
				language={language}
			/>
			<WebExample
				title="• Time Tracker"
				description={
					language === "es"
						? "Componente hecho usando React que toma datos en formato JSON y los muestra según la selección de tiempo del usuario."
						: "React component that takes JSON formatted data and displays it according to the user's time selection."
				}
				github="https://github.com/federuttkay/time-tracker"
				image={imgTimeTracker}
				url="https://time-tracker-federico.netlify.app/"
				language={language}
			/>
			<WebExample
				title="• Advice Generator"
				description={
					language === "es"
						? "Componente hecho usando React que se comunica con una API y muestra el consejo recibido, junto con su id. Incluye un botón para refrescar el resultado."
						: "A React component that communicates with an API and displays the received advice, along with its ID. It includes a button to refresh the result."
				}
				github="https://github.com/federuttkay/advice-generator"
				image={imgAdviceGenerator}
				url="https://advice-generator-federico.netlify.app/"
				language={language}
			/>
			<WebExample
				title="• FAQ Accordion"
				description={
					language === "es"
						? "Componente de acordeón hecho usando React en el cual se muestran preguntas y respuestas con una pequeña animación cada vez que se selecciona una distinta."
						: "Accordion component made using React, where questions and answers are displayed with a small animation each time a different one is selected."
				}
				github="https://github.com/federuttkay/faq-accordion"
				image={imgFaqAccordion}
				url="https://faq-accordion-federico.netlify.app/"
				language={language}
			/>
		</main>
	);
};

export default Demo;
