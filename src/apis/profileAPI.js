import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/user";
const logOutEndpoint = rootUrl + "/logout"

export const adminLogoutAPI = _id => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post(logOutEndpoint, {_id});

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};
