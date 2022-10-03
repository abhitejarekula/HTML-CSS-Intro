import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faMagnifyingGlass,
	faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import logo from "../../../assets/logo/logo.svg";

function Navbar() {
	const tabs = [
		{
			id: 1,
			name: "Shop",
			href: "#",
		},
		{
			id: 2,
			name: "collective",
			href: "#",
		},
		{
			id: 3,
			name: "Designers",
			href: "#",
		},
		{
			id: 4,
			name: "About Us ",
			href: "#",
		},
		{
			id: 5,
			name: "Contact",
			href: "#",
		},
	];
	const tabCons = [
		{
			id: 1,
			fontName: <FontAwesomeIcon icon={faBars} />,
			href: "#",
		},
		{
			id: 2,
			fontName: <FontAwesomeIcon icon={faMagnifyingGlass} />,
			href: "#",
		},
		{
			id: 3,
			fontName: <FontAwesomeIcon icon={faCartShopping} />,
			href: "#",
		},
	];

	return (
		<nav className="navbar">
			<div>
				<img src={logo} alt="logo" />
			</div>
			<ul className="middle-nav">
				{tabs.map(({ name, href }, id) => (
					<li
						className="middle-nav-list"
						key={id}
					>
						<a href={href}>{name}</a>
					</li>
				))}
			</ul>

			<ul className="right-nav">
				{tabCons.map(({ id, fontName, href }) => {
					return (
						<li
							className="right-nav-list"
							key={id}
						>
							<a
								className="right-icons"
								href={href}
							>
								{fontName}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
export default Navbar;
