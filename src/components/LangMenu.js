import React from "react";
import LangMenuItem from "./LangMenuItem";

function LangMenu(props) {
	function handleClick(event) {
		props.setLang(event.currentTarget.getAttribute("lang"));
	
	}

	return (
		<ul className="nav nav-pills">
			<LangMenuItem
				active={props.lang === "pt"}
				txt="Português"
				lang="pt"
				onClick={handleClick}
			/>
			<LangMenuItem
				active={props.lang === "en"}
				txt="English"
				lang="en"
				onClick={handleClick}
			/>
			<LangMenuItem
				active={props.lang === "es"}
				txt="Español"
				lang="es"
				onClick={handleClick}
			/>
			<LangMenuItem
				active={props.lang === "fr"}
				txt="Français"
				lang="fr"
				onClick={handleClick}
			/>
			<LangMenuItem
				active={props.lang === "de"}
				txt="Deutsch"
				lang="de"
				onClick={handleClick}
			/>
		</ul>
	);
}

export default LangMenu;
