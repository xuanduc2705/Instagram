import { Password } from "@mui/icons-material";
import axios from "./customized-axios";

const loginApi = (email,password)=>{
    return axios.post("/api/login",{email,password})
}
export{loginApi};