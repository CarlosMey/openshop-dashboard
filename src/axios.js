import axios from "axios";
// import store from "./tokenReducer"; // Importa la instancia del store desde el archivo donde lo defines
// import { removeToken, addToken } from "./tokenReducer"; // Importa las acciones del slice de tokens

// const axiosInstance = axios.create({
//   baseURL: "https://vooxel-admin.onrender.com/",
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = store.getState().tokens; // Obtener el token del store

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error.response && (error.response.status === 403 || error.response.status === 401)) {
//       const originalRequest = error.config;
//       const refreshToken = localStorage.getItem("refreshToken"); // Obtener el refresh token del localStorage

//       if (refreshToken) {
//         try {
//           // Intentar actualizar el token con el refresh token
//           const response = await axios.post("/auth/refresh", { refreshToken });
//           const newToken = response.data.token;

//           // Actualizar el token en el store y en el localStorage
//           store.dispatch(addToken(newToken));
//           localStorage.setItem("token", newToken);

//           // Reintentar la solicitud original con el nuevo token
//           originalRequest.headers.Authorization = `Bearer ${newToken}`;
//           return axios(originalRequest);
//         } catch (refreshError) {
//           // Si no se puede actualizar el token, redirigir al usuario al inicio de sesión
//           store.dispatch(removeToken());
//           window.location.href = "/login";
//         }
//       } else {
//         // Si no hay refresh token, redirigir al usuario al inicio de sesión
//         store.dispatch(removeToken());
//         window.location.href = "/login";
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;


export default axios.create({
  baseURL: `https://vooxel-admin.onrender.com/`
});