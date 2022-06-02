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
};

export const languagesAPI = {
    getLanguages() {
        return instance.get(`/languages`)
            .then(response => response);
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`user/${userId}`)
            .then(response => response.data);
    },
    addLanguage(typeLng, lng, userId, level = null) {
        return instance.post(`user/languages/add/${typeLng}/${lng}/${level}/${userId}`)
            .then(response => response);
    },
    removeLanguage(typeLng, lngId, userId) {
        return instance.delete(`user/languages/remove/${typeLng}/${lngId}/${userId}`)
            .then(response => response);
    },
    editLanguageLevel(lngId, level, userId) {
        return instance.put(`user/languages/update/${lngId}/${level}/${userId}`)
            .then(response => response);
    },
    updateAva(imgName, userId) {
        let formData = new FormData();
        formData.append("avatar", imgName);
        
        return instance.put(`user/upload/ava/${userId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateAboutMe(aboutMe, userId) {
        return instance.put(`/user/update/aboutMe/${userId}`, {...aboutMe})
            .then(response => response);
    },
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
    },
    updateStatus(userId, status) {
        return instance.put(`user/update/status/${userId}`, {status: status});
    },
    getStatus(userId) {
        return instance.get(`user/status/${userId}`)
            .then(response => response);
    },
    getUsers(count, page) {
        return instance.get(`/users/${count}/${page}`)
            .then(response => response);
    },
    getUsersByNameOrLastname(name) {
        return instance.get(`/users/${name}`)
            .then(response => response);
    },
    getMyFriends(userId) {
        return instance.get(`/friends/${userId}`)
            .then(response => response);
    },
    addFriend(friendId, userId) {
        return instance.put(`/friends/add/${friendId}/${userId}`)
            .then(response => response);
    },
    removeFriend(friendId, userId) {
        return instance.delete(`/friends/remove/${friendId}/${userId}`)
            .then(response => response);
    }
};

