import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import LangMenu from "./components/LangMenu";

function App() {
	const [lang, setLang] = useState(navigator.language.slice(0, 2));
	const [expressions, setExpressions] = useState([]);
	const [voices, setVoices] = useState([]);
	const speech = speechSynthesis;

	if ("onvoiceschanged" in speech) {
		speech.addEventListener("voiceschanged", () => {
			setVoices(speech.getVoices());
		});
	}
	useEffect(() => {
		async function getExpressions() {
			setExpressions(await require("./data/data"));
		}

		getExpressions();
	}, []);
	console.log(voices);

	return (
		<div className="container">
			<div className="row">
				<LangMenu lang={lang} setLang={setLang} />

				{expressions.map((el, idx) => {
					return (
						<Card
							txt={el["lang"][lang]}
							img={el.img}
							key={idx}
							voices={voices}
							lang={lang}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
