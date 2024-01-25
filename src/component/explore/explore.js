import Nav from "../nav/nav";
import React from "react";
import '../explore/explore.css'
import { useState } from "react";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

function Explore(){
    const [reel,setReels] = useState([
        {
              src:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHA8fezMeC1mkdWYSwA_INtrC2pBDzkBJAL068G9wmgOevf3Jv',
              name:'Real Madrid',
              like:'2M',
              cmt:'699K'
          },
          {
              src:'https://imageio.forbes.com/specials-images/imageserve/649362b74ed3f8f22a3cb268/65th-GRAMMY-Awards---Arrivals/960x0.jpg?format=jpg&width=960',
              name:'FC DortMund',
              like:'2M',
              cmt:'699K'
          },
          {
              src:'https://images2.thanhnien.vn/zoom/642_401/528068263637045248/2024/1/25/dt-vn-1-17061484175351761412836-67-0-1667-2560-crop-17061489442052057330412.jpg',
              name:'England',
              like:'2M',
              cmt:'699K'
          },
          {
              src:'https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_33366/samsung-galaxy-_main_334_1020.png.webp',
              name:'Post',
              like:'2M',
              cmt:'699K'
          },
          {
              src:'https://kenhsao.net/wp-content/uploads/2023/03/chao-tiktok-la-ai-va-gia-the-khung-co-nao.jpg',
              name:'Life',
              like:'2M',
              cmt:'699K'
          },
          {
              src:'https://pbs.twimg.com/media/Fo_jU5cWcAAvVE1.jpg',
              name:'MOTM',
              like:'2M',
              cmt:'699K'
          },
          {
              src:'https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2023/10/15/base64-1697371188123490553865.png',
              name:'Birmingham',
              like:'2M',
              cmt:'699K'
          },
          {
            src:'https://people.com/thmb/_JIOYjhryry5lHPdI5QycWVFvfo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(650x0:652x2)/christiano-renaldo-6e253ca29a3e489d8c490d193d70c95d.jpg',
            name:'Real Madrid',
            like:'2M',
            cmt:'699K'
        },
        {
            src:'https://vcdn-thethao.vnecdn.net/2023/12/28/08-bruno-fernandes-reacts-fina-2880-2732-1703762214.jpg',
            name:'FC DortMund',
            like:'2M',
            cmt:'699K'
        },
        {
            src:'https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp',
            name:'England',
            like:'2M',
            cmt:'699K'
        },
        {
            src:'https://cf.shopee.vn/file/vn-11134207-7qukw-ljv5um1impx073_tn',
            name:'Post',
            like:'2M',
            cmt:'699K'
        },
        {
            src:'https://cand.com.vn/Files/Image/thanhbinh/2018/07/26/thumb_660_756c2ff8-d8ab-48c0-8e67-260c3e7445ea.jpeg',
            name:'Life',
            like:'2M',
            cmt:'699K'
        },
        {
            src:'https://pbs.twimg.com/media/Fo_jU5cWcAAvVE1.jpg',
            name:'MOTM',
            like:'2M',
            cmt:'699K'
        },
        {
            src:'https://www.thesun.co.uk/wp-content/uploads/2023/06/crop-22612501-2.jpg?strip=all&quality=100&w=1080&h=1080&crop=1',
            name:'Birmingham',
            like:'2M',
            cmt:'699K'
        }])
return(
<div className="explore">
        <div className="reelnav">
        <Nav 
        explore={false}
        reels={true}
        />
        </div>
        <div className="reelslist">
        <div className="baidanggreel">
          {reel.map((post, index) => (
            <div className="baidangg1">
              <div className="baidangg11" style={{height:'320px'}}>
              <img key={index} src={post.src} className="heto" alt="" />
                <h3 className="reelview">{post.like}</h3>
                <PlayArrowRoundedIcon className="reelicon"/>
                <div className="overlay">
                  <div className="caption">
                    <div className="like">
                      <FavoriteBorderRoundedIcon className="icontym"/>
                    <h3 className="tym">{post.like}</h3>
                    </div>
                    <div className="cmt">
                      <ModeCommentOutlinedIcon className="icontym"/>
                    <h3 className="tym">{post.cmt}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    
</div>
);
}
export default Explore