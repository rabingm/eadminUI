import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/";
const conApi = rootUrl + "contactus";

export const getNessage = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.get(conApi);

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};
