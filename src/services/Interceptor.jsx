import axios from "axios";
const axiosInstance = axios.create(
    {
        baseURL:"https://api.example.com"
    }
    )
axiosInstance.request.use((config) => {
    // Modify the request config as needed before sending it
    // For example, add an authentication token:
    // config.headers['Authorization'] = 'Bearer your_auth_token';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  })

axiosInstance.response.use( (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle errors globally, e.g., display a toast message, redirect to an error page, etc.
    return Promise.reject(error);
  }
)