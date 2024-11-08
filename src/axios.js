import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: 'http://127.0.0.1:5001/airbnb-react-64656/us-central1/api'
    // "http://127.0.0.1:5001/furnio-react/us-central1/api",
});

export default instance;