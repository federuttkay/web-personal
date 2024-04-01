interface Props {
	language: string;
}

const Github = ({ language }: Props) => {
	return (
		<main className="grid">
			<h1>GitHub</h1>
			<a
				className="link"
				href="https://github.com/federuttkay?tab=repositories"
				target="_blank"
				rel="noopener noreferrer"
			>
				{language === "es"
					? "Mis repositorios en GitHub"
					: "My GitHub repositories"}
			</a>
		</main>
	);
};

export default Github;
