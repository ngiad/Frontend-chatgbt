import axios from "axios"

const Requestbase = axios.create({
    baseURL : "https://backend-chatgbt.onrender.com/"
})

export default Requestbase