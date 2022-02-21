import React from "react";
import FruitCard from "../components/FruitCard";
import { useFruit } from "../context/fruitContext";
import { matchForSort } from "../utils";

export default function Content() {
	const { fruits = [], filter } = useFruit();
	const renderContent = (item, index) => {
		return matchForSort(item.fruit_name, filter) ? (
			<FruitCard item={item} key={`${index}`} />
		) : null;
	};

	return <div className="content">{fruits.map(renderContent)}</div>;
}
