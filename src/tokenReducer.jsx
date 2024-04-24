import { createSlice } from "@reduxjs/toolkit";

const tokenFromLocalStorage = localStorage.getItem("token");

const tokenSlice = createSlice({
  name: "tokens",
  initialState: tokenFromLocalStorage ? tokenFromLocalStorage : "",
  reducers: {
    addToken: (state, action) => {
      localStorage.setItem("token", action.payload); // Guardar el token en localStorage
      return action.payload;
    },
    removeToken: (state) => {
      localStorage.removeItem("token"); // Eliminar el token de localStorage
      return "";
    },
  },
});

export const { addToken, removeToken } = tokenSlice.actions;
export default tokenSlice.reducer;