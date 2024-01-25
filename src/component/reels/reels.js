import Nav from "../nav/nav";
import React from "react";
import '../explore/explore.css'
import { useState } from "react";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import '../reels/reels.css'
import { Avatar } from "@mui/material";

function Reels(){
    const [reel,setReels] = useState([
        {
              src:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHA8fezMeC1mkdWYSwA_INtrC2pBDzkBJAL068G9wmgOevf3Jv',
              name:'Real Madrid',
              like:'2M',
              cmt:'699K',
              content:'hahahaha'
          },
          {
              src:'https://imageio.forbes.com/specials-images/imageserve/649362b74ed3f8f22a3cb268/65th-GRAMMY-Awards---Arrivals/960x0.jpg?format=jpg&width=960',
              name:'FC DortMund',
              like:'2M',
              cmt:'699K',
              content:'hahahaha'
          },
          {
              src:'https://images2.thanhnien.vn/zoom/642_401/528068263637045248/2024/1/25/dt-vn-1-17061484175351761412836-67-0-1667-2560-crop-17061489442052057330412.jpg',
              name:'England',
              like:'2M',
              cmt:'699K',
              content:'hahahaha'
          },
          {
              src:'https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_33366/samsung-galaxy-_main_334_1020.png.webp',
              name:'Post',
              like:'2M',
              cmt:'699K',
              content:'hahahaha'
          },
          {
              src:'https://kenhsao.net/wp-content/uploads/2023/03/chao-tiktok-la-ai-va-gia-the-khung-co-nao.jpg',
              name:'Life',
              like:'2M',
              cmt:'699K',
              content:'hahahaha'
          },
          {
              src:'https://pbs.twimg.com/media/Fo_jU5cWcAAvVE1.jpg',
              name:'MOTM',
              like:'2M',
              cmt:'699K',
              content:'hahahaha'
          },
          {
              src:'https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2023/10/15/base64-1697371188123490553865.png',
              name:'Birmingham',
              like:'2M',
              cmt:'699K',
              content:'hahahaha'
          },
          {
            src:'https://people.com/thmb/_JIOYjhryry5lHPdI5QycWVFvfo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(650x0:652x2)/christiano-renaldo-6e253ca29a3e489d8c490d193d70c95d.jpg',
            name:'Real Madrid',
            like:'2M',
            cmt:'699K',
            content:'hahahaha'
        },
        {
            src:'https://vcdn-thethao.vnecdn.net/2023/12/28/08-bruno-fernandes-reacts-fina-2880-2732-1703762214.jpg',
            name:'FC DortMund',
            like:'2M',
            cmt:'699K',
            content:'hahahaha'
        },
        {
            src:'https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp',
            name:'England',
            like:'2M',
            cmt:'699K',
            content:'hahahaha'
        },
        {
            src:'https://cf.shopee.vn/file/vn-11134207-7qukw-ljv5um1impx073_tn',
            name:'Post',
            like:'2M',
            cmt:'699K',
            content:'hahahaha'
        },
        {
            src:'https://cand.com.vn/Files/Image/thanhbinh/2018/07/26/thumb_660_756c2ff8-d8ab-48c0-8e67-260c3e7445ea.jpeg',
            name:'Life',
            like:'2M',
            cmt:'699K',
            content:'hahahaha'
        },
        {
            src:'https://pbs.twimg.com/media/Fo_jU5cWcAAvVE1.jpg',
            name:'MOTM',
            like:'2M',
            cmt:'699K',
            content:'hahahaha'
        },
        {
            src:'https://www.thesun.co.uk/wp-content/uploads/2023/06/crop-22612501-2.jpg?strip=all&quality=100&w=1080&h=1080&crop=1',
            name:'Birmingham',
            like:'2M',
            cmt:'699K',
            content:'hahahaha'
        }])
return(
<div className="explore">
        <div className="reelnav">
        <Nav 
        explore={true}
        reels={false}
        />
        </div>
        <div className="reelslist">
        <div className="videolist">
          {reel.map((post, index) => (
            <div className="video">
                
                <img
                className="videoanh"
                alt=""
                src={post.src}
                />
                <div className="gocduoi">
                    <div className="tenreel">
                    <Avatar>
                        <img src={post.src}/>
                    </Avatar>
                    <span className="tentaikhoan">
                        {post.name}
                    </span>
                    </div>
                    
                </div>
            </div>
          ))}
        </div>
        </div>
    
</div>
);
}
export default Reels