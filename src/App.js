import React from "react";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
	from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Main from "./containers/Main";
import { FruitProvider } from "./context/fruitContext";

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map(({ message, locations, path }) => {
			console.log(`Graphql error ${message}`);
		});
	}
});

const link = from([
	errorLink,
	new HttpLink({ uri: "https://fruits-api.netlify.app/graphql" }),
]);

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link,
});

export default function App(props) {
	return (
		<ApolloProvider client={client}>
			<FruitProvider>
				<Main />
			</FruitProvider>
		</ApolloProvider>
	);
}
