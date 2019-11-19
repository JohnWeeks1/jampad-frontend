import axios from 'axios';
import store from "./store";

export const HTTP = axios.create({
    baseURL: `http://jampad.localhost/api/`,
    headers: {
        Authorization: 'Bearer '+store.state.user.token,
    }
})
