import axios from "axios";

const roolURL = "http://localhost:8000/api/v1/";
const catApi = roolURL + "category";
export const saveCategory = (frmDt) => {
  return new Promise(async(resolve, reject) => {
    try {
      const {data} = await axios.post(catApi, frmDt);
     
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};


export const getCategories = (frmDt) => {
    return new Promise(async(resolve, reject) => {
      try {
        const {data} = await axios.post(catApi);
        
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };
