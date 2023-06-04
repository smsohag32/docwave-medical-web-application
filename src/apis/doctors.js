import axios from 'axios'
export const doctors = async(currentPage, limit) => {
   const res = await axios.get(`http://localhost:5000/doctors?page=${currentPage}&limit=${limit}`);
   const data = res.data;
   return data;
}