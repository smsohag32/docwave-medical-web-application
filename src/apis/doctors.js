import axios from 'axios'
export const doctors = async(currentPage, limit) => {
   const res = await axios.get(`http://localhost:5000/doctors?page=${currentPage}&limit=${limit}`);
   const data = res.data;
   return data;
}
export const appointmentPost = async(appointmentInfo) => {
   const res = await axios.post(`${import.meta.env.VITE_API_LINK}/appointments`,appointmentInfo);
   const data = res.data;
   return data;
}