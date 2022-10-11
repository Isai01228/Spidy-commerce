import axios from "axios";
const BASE_URL = 'http://localhost:3001/api/users/login'
const service = axios.create({BASE_URL})

export const login = async(email, password) => {
    const {data} = await service.post(`${BASE_URL} ${email} ${password}`)
    console.log(data);
    return data
}