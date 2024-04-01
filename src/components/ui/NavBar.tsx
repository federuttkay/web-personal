import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import iconMenuOpen from "../../assets/images/icon-menu.svg";
import iconMenuClose from "../../assets/images/icon-close-menu.svg";

interface Props {
	language: string;
}

const NavBar = ({ language }: Props) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		{ id: 1, label: language === "es" ? "Principal" : "Home", path: "/" },
		{ id: 2, label: "Portfolio", path: "/portfolio" },
		{ id: 3, label: "CV", path: "/cv" },
		{ id: 4, label: "GitHub", path: "/github" },
		{
			id: 5,
			label: language === "es" ? "Contacto" : "Contact",
			path: "/contacto",
		},
	];

	const location = useLocation();

	return (
		<nav className="nav flex flex-between">
			<Link className="title-logo" to="/">
				Federico Ruttkay
			</Link>
			<ul className={"nav__items" + (isMenuOpen ? " menu-open" : "")}>
				{menuItems.map((item) => (
					<li
						className={
							"nav__item" + (location.pathname === item.path ? " selected" : "")
						}
						key={item.id}
					>
						<Link to={item.path} onClick={() => setIsMenuOpen(false)}>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
			<div
				className="open-close-btn"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				{isMenuOpen ? <img src={iconMenuClose} /> : <img src={iconMenuOpen} />}
			</div>
		</nav>
	);
};

export default NavBar;
