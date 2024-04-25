import axios from "axios";
import { store } from "./store"; // Suponiendo que tienes un store.js donde exportas el store de Redux

const axiosInstance = axios.create({
  baseURL: "https://vooxel-admin.onrender.com/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().tokens; // Obtener el token del store

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && (error.response.status === 403 || error.response.status === 401)) {
      store.dispatch(removeToken()); // Eliminar el token del store si es inválido
      window.location.href = "/login"; // Redireccionar al usuario a la página de inicio de sesión
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;


// export default axios.create({
//   baseURL: `https://vooxel-admin.onrender.com/`
// });