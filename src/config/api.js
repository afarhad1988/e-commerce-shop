import axios from 'axios'

export const axiosV1 = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})
