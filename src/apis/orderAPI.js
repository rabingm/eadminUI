import axios from "axios";

const rootURL = "http://localhost:8000/api/v1/";
const orderAPI = rootURL + "order";

export const getOrder = () => {
  return new Promise(async(resolve, reject) => {
    try {
      const result = await axios.get(orderAPI);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};