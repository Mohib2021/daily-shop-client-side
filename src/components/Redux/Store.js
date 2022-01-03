import { configureStore } from "@reduxjs/toolkit";
import { sliceOfUser } from "./Slices";

export const store = configureStore({
	reducer: {
		userSlice: sliceOfUser,
	},
});
