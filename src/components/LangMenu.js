import React,{useState} from "react";
import LangMenuItem from "./LangMenuItem";
import Form from "./Form";

function LangMenu(props) {

const [isNavCollapsed, setIsNavCollapsed] = useState(true);
 const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

	function handleClick(event) {
		props.setLang(event.currentTarget.getAttribute("lang"));
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Speech App
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded={!isNavCollapsed ? true : false}
					aria-label="Toggle navigation"
					onClick={handleNavCollapse}
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
					<Form lang={props.lang} voices={props.voices} />
				</div>
			</div>
		</nav>
	);
}

export default LangMenu;
