/* eslint-disable no-fallthrough */
/* eslint-disable no-undef */
import axios from "axios";
import { mockSession } from "../mock/mock";
import { mocktreeData } from "../mock/mock";

export class Http {
    instance
    constructor(baseURL) {
        this.instance = axios.create({
            baseURL
        })
    }
    get(url, query, config) {
        return this.instance.request({ ...config, url: url, params: query, method: 'get' })
    }
    post(url, data, config) {
        return this.instance.request({ ...config, url, data, method: 'post' })
    }
    patch(url, data, config) {
        return this.instance.request < R > ({ ...config, url, data, method: 'patch' })
    }
    delete(url, query, config) {
        return this.instance.request < R > ({ ...config, url: url, params: query, method: 'delete' })
    }
}

const mock = (response) => {
    if (location.hostname !== 'localhost'
        && location.hostname !== '127.0.0.1'
        && location.hostname !== '192.168.3.57') { return false }
    switch (response.config?.params?._mock) {
        case 'tagIndex':
            [response.status, response.data] = mockTagIndex(response.config)
            return true
        case 'itemCreate':
            [response.status, response.data] = mockItemCreate(response.config)
            return true
        case 'itemIndex':
            [response.status, response.data] = mockItemIndex(response.config)
            return true
        case 'tagCreate':
            [response.status, response.data] = mockTagCreate(response.config)
        case 'session':
            [response.status, response.data] = mockSession(response.config)
            return true
        case 'treeData':
            [response.status, response.data] = mocktreeData(response.config)
            return true
    }
    return false
}

export const http = new Http('/api/v1')

http.instance.interceptors.request.use(config => {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
        config.headers.Authorization = `Bearer ${jwt}`
    }
    return config
})

http.instance.interceptors.response.use((response) => {
    mock(response)
    return response
}, (error) => {
    if (mock(error.response)) {
        return error.response
    } else {
        throw error
    }
})
http.instance.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            const axiosError = error
            if (axiosError.response?.status === 429) {
                alert('你太频繁了')
            }
        }
        throw error
    }
)
