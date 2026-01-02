import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "http://localhost:3000"
})

const useAxios = () => {
    return axiosInstance;
}

export default useAxios;


// https://travelease-server-chi.vercel.app