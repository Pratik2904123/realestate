import axios from "axios";


const apiRequest =  axios.create({
    baseURL: "https://realestate-api-9drm.onrender.com/api",
    withCredentials: true,
});


export default apiRequest;
