import {
  requestPending,
  fetchAllOrderSuccess,
  requestFail,
} from "./orderSlice";

import { getOrder } from "../../apis/orderAPI";

export const fetchOrders = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await getOrder(); //{status, message, result:[]}

    dispatch(fetchAllOrderSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
