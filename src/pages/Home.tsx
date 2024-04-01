interface Props {
	language: string;
}

const Home = ({ language }: Props) => {
	return (
		<main>
			<div className="main-title">
				<h1>Federico Ruttkay</h1>
				<p>
					{language === "es"
						? "Desarrollador Web Front-End/Maquetador"
						: "Front-End Developer"}
				</p>
			</div>
			<p>
				{language === "es"
					? "Mi nombre es Federico, y esta es mi página personal de presentación donde incluyo mi CV, muestro algunos ejemplos de páginas que he desarrollado, y doy acceso a los códigos de ellas en GitHub."
					: "My name is Federico, and this is my personal presentation webpage where I include my CV, show some examples of websites I have developed, and provide access to their code on GitHub."}
			</p>
			<p>
				{language === "es"
					? "De momento me encuentro en búsqueda de mi primera experiencia laboral en el rubro, y pretendo a través de este medio mostrar algunas de mis capacidades, por lo que los invito a leer mi CV - junto con la carta de presentación que lo acompaña - y ver el resto de los recursos que se presentan."
					: "At the moment I'm in search of my first work experience in the field, and through this platform I aim to showcase some of my abilities. Therefore, I invite you to read my CV - along with the accompanying cover letter - and explore the rest of the resources provided."}
			</p>
			<p>
				{language === "es"
					? "Agradezco desde ya el haber sido considerado para una posición dentro de su empresa, junto con toda oportunidad que se me pueda brindar."
					: "I appreciate being considered for a position within your company, along with any opportunity that may be offered to me."}
			</p>
		</main>
	);
};

export default Home;
