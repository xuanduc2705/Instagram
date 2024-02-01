import { Password } from "@mui/icons-material";
import instance from "./customized-axios";
import axios from "./customized-axios";

const loginApi = (email,password)=>{
    return instance.post("/api/login",{email,password})
}
export{loginApi};