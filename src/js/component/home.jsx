import React, { useState } from "react";

const Home = () => {
	//hooks
	const [color, setColor] = useState("");

	const changeColor = colors => {
		setColor(colors);
	};

	return (
		<React.Fragment>
			<div className="box" style={{ background: color }}></div>
			<button
				type="button"
				className="btn btn-success"
				onClick={() => changeColor("green")}>
				Verde
			</button>
			<button
				type="button"
				className="btn btn-warning"
				onClick={() => changeColor("yellow")}>
				Amarillo
			</button>
			<button
				type="button"
				className="btn btn-danger"
				onClick={() => changeColor("red")}>
				Rojo
			</button>
		</React.Fragment>
	);
};

export default Home;
