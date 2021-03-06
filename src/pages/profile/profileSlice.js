import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	userResponse : {},
	amdinProfile: {},
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		requestPending: state => {
			state.isLoading = true;
		},
		getProfileSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.amdinProfile = payload;
		},

		

		requestFail: (state, { payload }) => {
			state.isLoading = false;
			state.userResponse = payload;
		},
	},
});

const { reducer, actions } = profileSlice;

export const {
	requestPending,
	getProfileSuccess,
	requestFail,
	
} = actions;

export default reducer;
