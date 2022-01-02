import { createSlice } from "@reduxjs/toolkit";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const initialState = {
	user: {},
	userName: "",
	userEmail: "",
	userPassword: "",
	confirmPassword: "",
	error: "",
};

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const loginWithGoogle = () => {
	return signInWithPopup(auth, googleProvider);
};

const userSlice = createSlice({
	name: "user/slice",
	initialState,
	reducers: {
		getUserName: (state, { payload }) => {
			state.userName = payload;
		},
		getUserEmail: (state, { payload }) => {
			state.userEmail = payload;
		},
		getUserPassword: (state, { payload }) => {
			state.userPassword = payload;
		},
		getConfirmPassword: (state, { payload }) => {
			state.confirmPassword = payload;
		},
		googleLogin: (state, { payload }) => {
			payload
				.then((result) => {
					const user = result.user;
					state.user = user;
				})
				.catch((error) => {
					state.error = error.message;
				});
		},
	},
});

export const {
	getConfirmPassword,
	getUserEmail,
	getUserName,
	getUserPassword,
	error,
} = userSlice.actions;
export const sliceOfUser = userSlice.reducer;
