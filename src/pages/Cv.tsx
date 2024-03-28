import cv from "/public/CV.pdf";

const Cv = () => {
	return (
		<main className="grid">
			<h1>Currículum Vitae</h1>
			<a
				href={cv}
				className="link"
				download="CV y Carta de Presentación - Federico Ruttkay.pdf"
			>
				Descargar mi CV
			</a>
		</main>
	);
};

export default Cv;
