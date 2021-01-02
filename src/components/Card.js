import React from "react";
import "./Card.css";

function Card(props) {
	function handleClick() {
		let utterance = new SpeechSynthesisUtterance(props.txt);
		utterance.voice = props.voices.find(el => el.lang.slice(0,2) === props.lang )
		speechSynthesis.speak(utterance);
	}

	return (
		<div className="card col-md-3">
			<img src={props.img} className="card-img-top" alt={props.txt} />
			<div className="card-body">
				<h5 className="card-title">{props.txt}</h5>
				<a href="#" onClick={handleClick} className="btn btn-primary">
					Play
				</a>
			</div>
		</div>
	);
}

export default Card;
