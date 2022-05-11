import axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'http://localhost:3000/',
    headers: {
        "API-KEY": "7234kdfjwef-234l2k3jf-234234",
    }
});

export const headerAPI = {
    getAuthUsers() {
        return instance.get(`auth/me`)
        .then(response => response.data);
    }
}

export const usersAPI = {
    getLoginUser(email, password) {
        return instance.post(`auth/login`, {
            email, password
        })
        .then(response => response);
    },
    createNewUser(newUserData) {
        return instance.post('users/create', newUserData)
            .then(response => response);
    }
};

