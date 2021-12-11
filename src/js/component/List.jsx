import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "../../styles/List.scss";
import ListItem from "./ListItem.jsx";

const List = props => {
	const [data, setData] = useState("");
	const [list, setList] = useState([]);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Buga", {
			method: "GET",
			headers: {
				Accept: "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok);
				console.log(resp.status);
				return resp.json();
			})
			.then(data => {
				setList(data);
				return data;
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	const optimizedFetch = (fetchMethod, fetchBody) => {
		const url = "https://assets.breatheco.de/apis/fake/todos/user/Emanuel";
		const header = {
			method: fetchMethod,
			body: fetchBody,
			headers: {
				"Content-Type": "application/json"
			}
		};

		fetch(url, header)
			.then(res => res.json())
			.then(data => console.log(data))
			.catch(error => console.error(error));
	};

	// function to update the tasks in the list
	const handleSubmit = ev => {
		ev.preventDefault();
		console.log(ev.value);
		setList([...list, data.label]);
	};
	// function to remove tasks from the list
	const handleClik = i => {
		setList(list.filter((val, position) => position !== i));
	};

	return (
		<>
			<div id="myDIV" className="header ">
				<h2>My To Do List</h2>
				<form onSubmit={ev => handleSubmit(ev)}>
					<div className="d-flex justify-content-center">
						<input
							type="text"
							id="myInput"
							placeholder={props.placeholder}
							onChange={ev =>
								optimizedFetch("PUT", JSON.stringify([...ev]))
							}
						/>
					</div>
				</form>
			</div>
			<ul>
				{list.map((value, i) => (
					<ListItem
						key={i}
						ix={i}
						valueR={value.label}
						removeHandler={() => handleClik(i)}
					/>
				))}
			</ul>
		</>
	);
};

List.propTypes = {
	placeholder: PropTypes.string
};
export default List;
