import React from "react";
import { useState } from "react";
import '../detail/headertail.css';
import { useParams } from 'react-router-dom';
import DoneIcon from "@mui/icons-material/Done";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

function Headertail() {
    const { name } = useParams();
    const[posts, setPosts] = useState([
        {
            ava:'https://i.ibb.co/s3TX9zq/412089599-590870466519171-2689894443863566184-n-1.jpg',
            sname:'s.pinkduck_03',
            posts:'3',
          followers:'115',
          following:'1',
          ten2:'🅳🆄🅺🅴'
        },
        {
            ava:'https://i.ibb.co/qkhmRLp/418758070-2278354819026761-6414880944565960628-n.jpg',
            sname:'hathu_87',
            posts:'6',
          followers:'115',
          following:'1',
          ten2:'Pham Thu Ha',
          tieusu:'CEO Người Nhật Gốc Cây!\n Người eo của Xuân Đức \n Missgrand Châu Phong'
        },
        {
          ava:"https://pbs.twimg.com/profile_images/1669466617409880067/ErRoSTXm_400x400.jpg",
          image1:'https://static.independent.co.uk/2023/12/18/19/GettyImages-1693541710.jpg?width=1200&height=1200&fit=crop',
          sname:'judebellingham',
          posts:'340',
          followers:'26M',
          following:'723',
          ten2:'Jude Bellingham',
          tieusu:'Real Madrid.🤍\n@AdidasFootball Athlete.\nTwitter: BellinghamJude\nenquiries@belloandbello.com'          
      },
        {
          ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7BE1IVIjuNOc7uE2lZMXq-Ad-9LViAWni--0LYL0xQ&s",
          image1:'https://static.independent.co.uk/2022/10/27/21/1437086710.jpg?width=1200&height=1200&fit=crop',
          sname:'cristiano',
          posts:'3,611',
          followers:'617M',
          following:'583',
          ten2:'Cristiano Ronaldo',
          tieusu:'Join my NFT journey on @Binance. Click the link below to get started.\nter.li/CR7ForeverZone\nSiuuuuuuuuuuuuuuuuuuuu'
      },
      {
          ava:"https://i.ibb.co/B3YL3YW/397982323-1068531357902078-6086157178992916321-n.jpg",
          image1:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/messiworldcupkiss-three_four.jpg?VersionId=bC.F3bXDnv.tllvg4xShTny9qKH0ny0U',
          sname:'leomessi',
          posts:'340',
          followers:'26M',
          following:'723',
          ten2:'Lionel Messi',
          tieusu:'Athlete\nBienvenidos a la cuenta oficial de Instagram de Leo Messi \nWelcome to the official Leo Messi Instagram account\n@themessiexperience.com'
      },
      {
          ava:"https://scontent.fhan17-1.fna.fbcdn.net/v/t1.6435-9/177549202_320774429402765_4463919220949422685_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeGDmc0saVSUmf0AXUm77tjZcfAnf2O5bX1x8Cd_Y7ltfYj9vqtg0P2s6p3pOdP0mjxwbgBGuMURUFRHrpdWCseT&_nc_ohc=zS7IXsaXazQAX-gdvxW&_nc_ht=scontent.fhan17-1.fna&oh=00_AfB9MX7giHeCewTjwAjiYo8iCCYIZ5rLxXkkYOUDl5Y4LQ&oe=65D05C38",
          image1:'https://i.ibb.co/YQ5KS77/419569827-1117415399425122-521516947774380838-n.jpg',
          sname:'chuyencuahanoi.official',
          posts:'340',
          followers:'26M',
          following:'723'
      }
      ]);
    
    const tenn = posts.find(post => post.sname === name);
    const text = tenn.ten2;
  return (
    <div className="headertailpage">
        <div className="htrai">
        <div className="himage">
        <img 
        className="anh"
        src={tenn.ava} 
        alt=""
        />
        </div>
        </div>
        <div className="hinfo">
        <div className="info1">
            <span className="infoname">
                {name}
            </span>
            <DoneIcon className='done' style={{ fontSize: '16',marginRight:'10',borderRadius: '50%', color:'white',backgroundColor:'blue',marginRight:'30px' }} />
            <button className="but">Following</button>
            <button className="but">Message</button>
            {/* <button className="but2"><PersonAddAltIcon/></button> */}
            <MoreHorizIcon style={{color:'black',fontSize:'25px'}} className="but2"/>
        </div>
        <div className="info2">
            <span className="info21">{tenn.posts}</span><span className="info22"> posts</span>
            <span className="info21">{tenn.followers}</span><span className="info22"> followers</span>
            <span className="info21">{tenn.following}</span><span className="info22"> following</span>
        </div>
        <div className="info3">
        <span className="info31">{tenn.ten2}</span>
  {tenn.tieusu ? (
    <span className="info32">
      {tenn.tieusu.split("\n").map((line, index) => (
        <div key={index} style={{ marginTop: '5px' }}>
          {line}
        </div>
      ))}
    </span>
  ) : null}
        </div>
        <div className="info4"></div>
        </div>
        

    </div>
  );
}

export default Headertail;