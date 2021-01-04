import React from "react";

function LangMenuItem(props) {
	return (
		<li className="nav-item">
			<a
				href="#"
				className={props.active ? "nav-link active" : "nav-link"}
				lang={props.lang}
				onClick={props.onClick}
			>
				{props.txt}
			</a>
		</li>
	);
}

export default LangMenuItem;
