import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  orderList: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },

    fetchAllOrderSuccess: (state, { payload }) => {
      state.orderList = payload.data.result || [];
	  console.log("from order slice",payload.data.result)
      state.isLoading = false;
    },

    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});

const { reducer, actions } = orderSlice;

export const { requestPending, fetchAllOrderSuccess, requestFail } = actions;

export default reducer;
