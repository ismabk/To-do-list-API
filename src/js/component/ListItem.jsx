import React from "react";
import PropTypes from "prop-types";

import "../../styles/ListItem.scss";

const ListItem = props => {
	return (
		<>
			<li className="d-flex justify-content-between" key={props.ix}>
				{props.valueR}
				<button
					onClick={() => {
						props.removeHandler();
					}}>
					<i className="fas fa-trash"></i>
				</button>{" "}
			</li>
		</>
	);
};
ListItem.propTypes = {
	ix: PropTypes.number,
	valueR: PropTypes.string,
	removeHandler: PropTypes.func
};

export default ListItem;
