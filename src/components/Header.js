import React from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useFruit } from "../context/fruitContext";

const Header = (props) => {
	const { setFilter } = useFruit();
	const [value, setValue] = React.useState("");
	useDebounce((v) => setFilter(v), 800, [value]);

	const onChange = (e) => {
		setValue(e.target.value);
	};
	return (
		<div className="header">
			<input
				className="headerInput"
				type="text"
				name="username"
				value={value}
				onChange={onChange}
				placeholder={"Search fruits here"}
			/>
			<button
				onClick={() => {
					console.log("Hello world");
				}}
				className="sbtn"
			>
				{"Search"}
			</button>
		</div>
	);
};
export default Header;
