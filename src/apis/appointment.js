import axios from "axios"

export const getAppointment = async(email) =>{
    const res = await axios.get(`${import.meta.env.VITE_API_LINK}/appointments/${email}`)
    const data = res.data;
    return data;
}