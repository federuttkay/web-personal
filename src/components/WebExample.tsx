import "./WebExample.css";

interface Props {
	title: string;
	description: string;
	github: string;
	image: string;
	url: string;
}

const WebExample = ({ title, description, github, image, url }: Props) => {
	return (
		<section className="web grid">
			<div className="web__content grid">
				<a href={url} target="_blank" rel="noopener noreferrer">
					<h2 className="web__title">{title}</h2>
					<p className="web__description">{description}</p>
				</a>

				<a
					className="web__github-code"
					href={github}
					target="_blank"
					rel="noopener noreferrer"
				>
					Código en GitHub.
				</a>
			</div>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<img src={image} alt="" />
			</a>
		</section>
	);
};

export default WebExample;
