import axios from 'axios';
import store from "./store";

export const HTTP = axios.create({
    baseURL: `http://jampad.test/api/`,
    headers: {
        Authorization: 'Bearer '+store.state.user.token,
    }
})
