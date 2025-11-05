import axios from "axios"
import { api_router } from '../app-configs'

const apiUrl = import.meta.env.VITE_APP_API_URL

export const fetchAllEntries = async () => {
    try {
        const response = await axios.get(`${apiUrl}${api_router.ENTRIES}`)
        return response.data
    }
    catch (err) {
        throw new Error(err)
        console.log(err)
    }
}