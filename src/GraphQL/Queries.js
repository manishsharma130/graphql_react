import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
	query {
		fruits {
			origin
			fruit_name
			tree_name
			family
		}
	}
`;
