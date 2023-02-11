import axios from "axios"

let urlDeploy = "https://backend-chatgbt.onrender.com/"
let urlLocal = "http://localhost:5000/"

const Requestbase = axios.create({
    baseURL : urlDeploy
})

export default Requestbase