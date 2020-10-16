import axios from "axios";

let instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'c3ce5454-9236-4e2f-a475-c9ef1d7a79d1'
    }
})

export const AuthApi = {
    authMe (){
        return instance.get(`auth/me`)
    }
}

export const UsersApi = {
    getUsers (currentPage: number = 1) {
        return instance.get(`users?count=24&page=${currentPage}`,).then(response => {
            return response.data
        })
    },
    unfollow (id: number) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    },
    follow (id: number) {
        return instance.post(`follow/${id}`, {}).then(response => {
            return response.data
        })
    }
}

export const ProfileApi = {
    getProfile (userId: string) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data})
    }
}