import axios from "axios"

let instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '2752476b-6aed-46c2-8e27-29afee5ef3bf'
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
    },
    getStatus (userId: number | undefined) {
        return instance.get(`profile/status/${userId}`).then(response => {
            return response.data})
    },
    updateOldStatus (status: string) {
        return instance.put(`profile/status`, {status: status}).then(response => {
            return response.data})
    }
}