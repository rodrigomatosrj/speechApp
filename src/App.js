import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import LangMenu from "./components/LangMenu";

function App() {
	const [lang, setLang] = useState("pt");
	const [expressions, setExpressions] = useState([]);
	const [voices, setVoices] = useState([]);
	const speech = window.speechSynthesis;

	useEffect(() => {
		async function getExpressions() {
			setExpressions(await require("./data/data"));
		}


		async function getVoices() {
			setVoices(await speech.getVoices());
		}
    getExpressions();
    getVoices();

  }, []);
	console.log(voices);


	return (
		<div className="container">
			<div className="row">
				<LangMenu lang={lang} setLang={setLang} />

				{expressions.map((el, idx) => {
					return <Card txt={el["lang"][lang]} img={el.img} key={idx} voices={voices} lang={lang}/>;
				})}
			</div>
		</div>
	);
}

export default App;
