import React from "react";

import Content from "./Content";
import Header from "../components/Header";

export default function Main(props) {
	return (
		<div className="main">
			<Header />
			<Content />
		</div>
	);
}
