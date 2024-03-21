import axios from "axios"



const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '2ecd69fe-2a50-42a6-8b92-395794495cfe'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const getUsers = (currentPage: number) => {
    return instance.get(`users?count=5&page=${currentPage}`, {})
        .then(response => {
            return response.data
        })
}


export const changeFoll = (id: number) => {
    return instance.post(`follow/${id}`)
        .then(res => {
            return res.data.resultCode
        })
}

export const changeUnFoll = (id: number) => {
    return instance.delete(`follow/${id}`)
        .then(res => {
            return res.data.resultCode
        })
}

export const addUsersAp = (params: number) => {
    return instance.get(`profile/${params}`)
}


export const me = () => {
    return instance.get('auth/me')
        .then(val => {
            return val.data
        })
}

export const getProfile = (id: number) => {
    return instance.get(`profile/${id}`)
}


export const addStatusAp = (id: number) => {
   return instance.get(`/profile/status/${id}`)
}

export const changeStatusAp = (value: string) => {
    return instance.put(`/profile/status`, {
      status: value
    }).then((val)=>{
        return val.data
    })
 }