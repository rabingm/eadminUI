import {
	requestPending,
	fetchAllMessageSuccess,
	requestFail,
	
} from "./contactSlice";

import {
	getNessage
} from "../../apis/contactAPI";


export const fetchMessages = () => async dispatch => {
	try {
		const result = await getNessage(); //{status, message, result:[]}

		console.log("form contact action", result)

		dispatch(fetchAllMessageSuccess(result));
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};