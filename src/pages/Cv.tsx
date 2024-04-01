import cv from "/public/CV.pdf";

interface Props {
	language: string;
}
const Cv = ({ language }: Props) => {
	return (
		<main className="grid">
			<h1>{language === "es" ? "Currículum Vitae" : "Curriculum Vitae"}</h1>
			<a href={cv} className="link" download="CV - Federico Ruttkay.pdf">
				{language === "es" ? "Descargar mi CV" : "Download my CV"}
			</a>
		</main>
	);
};

export default Cv;
