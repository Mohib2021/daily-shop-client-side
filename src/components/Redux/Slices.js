import { createSlice } from "@reduxjs/toolkit";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import firebaseInitialization from "../Firebase/Firebase.init";
firebaseInitialization();
const initialState = {
	user: {},
	userName: "",
	userEmail: "",
	userPassword: "",
	confirmPassword: "",
	error: "",
	cart: [],
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
		setUserName: (state, { payload }) => {
			state.userName = payload;
		},
		setUserEmail: (state, { payload }) => {
			state.userEmail = payload;
		},
		setUserPassword: (state, { payload }) => {
			state.userPassword = payload;
		},
		setConfirmPassword: (state, { payload }) => {
			state.confirmPassword = payload;
		},
		googleLogin: (state) => {
			loginWithGoogle()
				.then((result) => {
					const user = result.user;
					state.user = user;
				})
				.catch((error) => {
					state.error = error.message;
				});
		},
		addToCart: (state, { payload }) => {
			state.cart.push(payload);
		},
	},
});

export const {
	setConfirmPassword,
	setUserEmail,
	setUserName,
	setUserPassword,
	googleLogin,
	addToCart,
} = userSlice.actions;
export const sliceOfUser = userSlice.reducer;
