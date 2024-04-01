interface Props {
	language: string;
}

const Contacto = ({ language }: Props) => {
	return (
		<main>
			<h1>{language === "es" ? "Contacto" : "Contact"}</h1>
			<p>
				{language === "es"
					? "Por consultas por favor comunicarse al 099523003 o por correo a "
					: "For inquiries, please contact me at +598 9952 3003 or via email at "}
				<a href="mailto:fede.ruttkay@gmail.com">fede.ruttkay@gmail.com</a>.
			</p>
			<p>
				{language === "es" ? "También puedes " : "You can also "}
				<a
					href="https://www.linkedin.com/in/federico-ruttkay/"
					target="_blank"
					rel="noopener noreferrer"
				>
					{language === "es"
						? "acceder a mi perfil de LinkedIn"
						: "access my LinkedIn profile"}
				</a>
				.
			</p>
		</main>
	);
};

export default Contacto;
