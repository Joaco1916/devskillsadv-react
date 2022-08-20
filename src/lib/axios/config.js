import Axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

createAuthRefreshInterceptor(axios, failedRequest =>
    axios({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        url: '/auth',
        method: 'post',
        headers: failedRequest.config.headers,
        data: {
            username: "sarah",
            password: "connor"
        }
    })
        .then(resp => {
            const { token: accessToken } = resp.data
            failedRequest.response.config.headers.Authorization = `Bearer ${accessToken}`
            axios.defaults.headers.Authorization = `Bearer ${accessToken}`

            return Promise.resolve()
        })
        .catch(e => {
            return Promise.reject()
        }),
);

export const setToken = token => {
    if (!token) return
    axios.defaults.headers.common['Authorization'] = `${token.type} ${token.value}`
};

export default axios