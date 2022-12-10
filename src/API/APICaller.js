import axios from "axios";
import { BASE_URL } from "../config";

export const login = async (params) => {
    try {
        const apiSubDirectory = 'login';
        const url = `${BASE_URL}/${apiSubDirectory}/`;
        const response = await axios({
            method: 'POST',
            url,
            headers: { 'Content-Type': 'application/json' },
            data: {
                email: params.email,
                password: params.password,
            },
        });

        return response.data;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
};

export const register = async (params) => {
    try {
        const apiSubDirectory = 'register';
        const url = `${BASE_URL}/${apiSubDirectory}/`;
        console.log(BASE_URL);
        const response = await axios({
            method: 'POST',
            url,
            headers: { 'Content-Type': 'application/json' },
            data: {
                username: params.name,
                email: params.email,
                password: params.password,
                passwordConf: params.password2,
            },
        });

        return response.data;
    } catch (err) {
        console.log(err.message);
        throw err;
    }
};