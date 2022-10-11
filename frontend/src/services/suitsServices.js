import axios from "axios";
const BASE_URL = 'http://localhost:3001/api/suits'
const service = axios.create({BASE_URL})

export const getAllSuits = async() => {
    const {data} = await service.get(`${BASE_URL}`)
    return data
}