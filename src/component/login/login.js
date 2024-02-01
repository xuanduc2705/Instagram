import React, { useState } from "react";
import { loginApi } from "../../services/services";
import {toast} from "react-toastify"
import '../login/login.css'
import { FaFacebookSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { saveTokenToSessionStorage } from "../Util/storageUtil";
import { red } from "@mui/material/colors";

function redirectG(){
    window.location.href = "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D30DCB500-F0B0-4E1D-A3EB-4FF738793965%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%3A%2F%2Fcoccoc.com%2Fsearch%3Fquery%3DInstagram";
}
function redirectM(){
    window.location.href ="https://apps.microsoft.com/detail/9NBLGGH5L9XT?hl=en-us&gl=US"
    
}
function Login(){

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [showError,setShowError] = useState(true)
    const handleLogin = async () => {
        try {
          let res = await loginApi(email, password);
      
          console.log(">>check res:", res);
          console.log(res.data.error);
      
          if (res.data.status == 400) {
            navigate("/login");
          } else {
            setShowError(true)
            saveTokenToSessionStorage(res.data.token);
            navigate("/home");
          }
        } catch (error) {
          console.error("An error occurred:", error);
          setShowError(false)
        }
      };
return(
    <div className="Login">
    <div className="loginbody">
        <div className="loginbody1">
            <img src="https://i.ibb.co/nch8VHn/login.png"
            className="loginphone"
            alt=''/>
        </div>
        <div className="loginbody2">
        <div className="formlogin">
        <div className="headerlogin">
        <img className='logo_login' 
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' 
        alt=''
        />
        <span style={{textAlign:'center'}}>eve.holt@reqres.in</span>
        <input 
        className="usernam" 
        placeholder="Phone number,username, or email"
        value={email}
        onChange={(event)=>setEmail(event.target.value)}/>
            {showError? (
                <div></div>
            ):(
                <p style={{color:'red',fontSize:'10px',marginLeft:"50px"}}>Wrong username!</p>
            )
            }
        <input 
        type="password" 
        className="usernam" 
        placeholder="Password" 
        value={password}
        onChange={(event)=>setPassword(event.target.value)}/>
        <button className="loginbutton"
        onClick={()=>handleLogin()}
        >
            Log in
        </button>
        <div className="or">
            <div className="line1"></div>
            <div className="orline">OR</div>
            <div className="line2"></div>
        </div>
        <div className="facebook">
        <FaFacebookSquare className="fbicon"/>
        <span className="loginwith">Log in with Facebook</span>
        </div>
        <div className="forgot">
            <span>Forgot password?</span>
        </div>
        </div>
        <div className="signup">
            <h3 className="ss1">Don't have an account?</h3>
            <h3 className="ss2"> Sign up</h3>
        </div>
        <div className="appp">
            <span className="gettheapp">Get the app.</span>
            <div className="geton">
                <div className="google">
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                    alt=""
                    className="anhgoogle"
                    onClick={redirectG}
                    />
                </div>
                <div className="micro">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Get_it_from_Microsoft_Badge.svg/1200px-Get_it_from_Microsoft_Badge.svg.png"
                    alt=""
                    className="anhmicro"
                    onClick={redirectM}
                    />
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    <div className="loginfooter">
            <div className="list">
            <a className="lis">Meta</a>
            <a className="lis">About</a>
            <a className="lis">Blog</a>
            <a className="lis">Jobs</a>
            <a className="lis">Help</a>
            <a className="lis">API</a>
            <a className="lis">Privacy</a>
            <a className="lis">Terms</a>
            <a className="lis">Locations</a>
            <a className="lis">Instagram Lite</a>
            <a className="lis">Threads</a>
            <a className="lis">Contact Uploading & Non-Users</a>
            <a className="lis">Meta Verified</a>
            </div>
            <div className="selectlang">
                <span>English</span>
                <span>© 2024 Instagram from Meta</span>
            </div>
    </div>
    </div>
);
}
export default Login