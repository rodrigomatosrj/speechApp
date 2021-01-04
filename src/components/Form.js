import React, { useState } from "react";
import PlayButton from "./PlayButton";

function Form(props) {
	const [state, setState] = useState("");

	const placeHolder = {
		en: "Say something",
		pt: "Diga algo",
		fr: "Dit quelque chose",
		es: "Di algo",
		de: "Sag etwas",
	};

	function handleChange(event) {
		setState(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		const languages = {
			en: "en-US",
			pt: "pt-BR",
			fr: "fr-FR",
			es: "es-ES",
			de: "de-DE",
		};
		let utterance = new SpeechSynthesisUtterance(state);
		utterance.lang = languages[props.lang];
		utterance.voice = props.voices.find((el) => el.lang === utterance.lang);
		speechSynthesis.speak(utterance);
	}

	return (
		<form class="d-flex" onSubmit={handleSubmit}>
			<input
				class="form-control me-2"
				type="search"
				placeholder={placeHolder[props.lang]}
				aria-label={placeHolder[props.lang]}
				value={state}
				onChange={handleChange}
			/>
			<PlayButton />
		</form>
	);
}

export default Form;
