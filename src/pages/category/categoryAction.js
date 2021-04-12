import { saveCategory } from "../../apis/categoriAPI.js";
import {
  requestPending,
  addCategorySuccess,
  fetchAllCategorySuccess,
  requestFail,
} from "./categorySlice.js";

export const addNewCategory = (frmDt) => async (dispatch) => {
  ///Call api or reducer to update state

  try {
    // dispatch(requestPending());
    const result = await saveCategory(frmDt);
    console.log(result)
    dispatch(addCategorySuccess(result));
  } catch (error) {
    console.log(error)
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
