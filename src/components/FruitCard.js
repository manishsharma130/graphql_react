import React from "react";

const FruitCard = (props) => {
	const { item } = props;
	return (
		<div className="fruitCard">
			<div className="cardContent">
				<h3>{"Fruit Name"}</h3>
				<p>{item?.fruit_name || ""}</p>
			</div>
			<div className="cardContent">
				<h3>{"Tree Name"}</h3>
				<p>{item?.tree_name || ""}</p>
			</div>
			<div className="cardContent">
				<h3>{"Family Name"}</h3>
				<p>{item?.family || ""}</p>
			</div>
		</div>
	);
};
export default FruitCard;
