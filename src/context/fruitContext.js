import React from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

const FruitContext = React.createContext();
export const useFruit = () => React.useContext(FruitContext);
export const FruitProvider = (props) => {
	const [fruits, setFruits] = React.useState([]);
	const [filter, setFilter] = React.useState([]);
	const { error, loading, data } = useQuery(LOAD_USERS);
	React.useEffect(() => {
		console.log("Data:- ", data);
		setFruits(data?.fruits || []);
	}, [data]);
	return (
		<FruitContext.Provider
			value={{
				fruits,
				setFruits,
				filter,
				setFilter,
			}}
		>
			{props.children}
		</FruitContext.Provider>
	);
};
