import axios from "axios";
const api = axios.create({
    baseURL: 'htpps://www.themealdb.com/api/json/v1/1/',
})

export default function useAPI() {
    return { api }
}