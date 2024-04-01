import "./Language.css";

interface Props {
	language: string;
	handleLangSelect: (lang: string) => void;
}

const Language = ({ language, handleLangSelect }: Props) => {
	return (
		<div className="language-bar">
			<span
				onClick={() => handleLangSelect("es")}
				className={"lang-option" + (language === "es" ? " lang-selected" : "")}
			>
				Español{" "}
			</span>
			<span>|</span>
			<span
				onClick={() => handleLangSelect("en")}
				className={"lang-option" + (language === "en" ? " lang-selected" : "")}
			>
				{" "}
				English
			</span>
		</div>
	);
};

export default Language;
