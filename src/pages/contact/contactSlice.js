import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	status: "",
	message: "",
	messageList: [],
	MessageResponse:{},
	show: false,
};

const contactSlice = createSlice({
	name: "contact",
	initialState,
	reducers: {
		requestPending: state => {
			state.isLoading = true;
		},

		fetchAllMessageSuccess: (state, { payload }) => {
			state.messageList = payload.result;
			state.isLoading = false;
		},

		toggleMessageModal: state => {
			state.show = !state.show;
			if (!state.show) {
				state.MessageResponse = {};
			}
		},

		requestFail: (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.status;
			state.message = payload.message;
		},
	},
});

const { reducer, actions } = contactSlice;

export const {
	requestPending,
	fetchAllMessageSuccess,
	toggleMessageModal,
	requestFail,
} = actions;

export default reducer;
