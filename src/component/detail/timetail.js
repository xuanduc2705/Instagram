import React from "react";
import { useState } from "react";
import '../detail/timetail.css';
import GridOnIcon from '@mui/icons-material/GridOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PortraitIcon from '@mui/icons-material/Portrait';
import { useParams } from 'react-router-dom';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
function Timetail() {
  const{name} = useParams();
  const[posts, setPosts] = useState([
    {
        ava:'https://pbs.twimg.com/profile_images/1669466617409880067/ErRoSTXm_400x400.jpg',
        sname:'judebellingham',
        post:[{
          src:'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F06%2Freal-madrid-signs-jude-bellingham-borussia-dortmund-1.jpg?cbr=1&q=90',
          name:'Real Madrid',
          like:'2M',
          cmt:'699K'
      },
      {
          src:'https://i.guim.co.uk/img/media/38d765dbbe8dfd454da6d688c3e284aa6562b473/0_169_4076_2445/master/4076.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4337eb1e19b6cc3c31598905539f1372',
          name:'FC DortMund',
          like:'2M',
          cmt:'699K'
      },
      {
          src:'https://photo-cms-giaoducthoidai.epicdn.me/w820/Uploaded/2024/ygtmrk/2023_12_29/methode-times-prod-web-bin-2a55b224-053c-11ee-9bf2-8ca4db35d928-823.jpg',
          name:'England',
          like:'2M',
          cmt:'699K'
      },
      {
          src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTbQFtT73N5_uzphYBMDvwheYcfozUUpkrgt6WO2Ec7U2PmmRYrG9qpGWloFoE83RLhk&usqp=CAU',
          name:'Post',
          like:'2M',
          cmt:'699K'
      },
      {
          src:'https://i.pinimg.com/750x/fe/90/31/fe903186576f3193c0220c333d4f4740.jpg',
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
      }],
        reel:[{
          src:'https://i.pinimg.com/736x/5e/3b/8e/5e3b8edfd0fe39592b34180c51082afb.jpg',
          view:'12M',
          like:'2M',
          cmt:'699K'
        },{
          src:'https://i.pinimg.com/736x/5e/3b/8e/5e3b8edfd0fe39592b34180c51082afb.jpg',
          view:'12M',
          like:'2M',
          cmt:'699K'
        },{
          src:'https://i.pinimg.com/736x/5e/3b/8e/5e3b8edfd0fe39592b34180c51082afb.jpg',
          view:'12M',
          like:'2M',
          cmt:'699K'
        },{
          src:'https://i.pinimg.com/736x/5e/3b/8e/5e3b8edfd0fe39592b34180c51082afb.jpg',
          view:'12M',
          like:'2M',
          cmt:'699K'
        },{
          src:'https://i.pinimg.com/736x/5e/3b/8e/5e3b8edfd0fe39592b34180c51082afb.jpg',
          view:'12M',
          like:'2M',
          cmt:'699K'
        },{
          src:'https://i.pinimg.com/736x/5e/3b/8e/5e3b8edfd0fe39592b34180c51082afb.jpg',
          view:'12M',
          like:'2M',
          cmt:'699K'
        },{
          src:'https://i.pinimg.com/736x/5e/3b/8e/5e3b8edfd0fe39592b34180c51082afb.jpg',
          view:'12M',
          like:'2M',
          cmt:'699K'
        }],
        tagged:[]
    },
    {
        ava:'https://i.ibb.co/s3TX9zq/412089599-590870466519171-2689894443863566184-n-1.jpg',
        sname:'s.pinkduck_03',
        post:['https://i.ibb.co/s3TX9zq/412089599-590870466519171-2689894443863566184-n-1.jpg','https://i.ibb.co/s3TX9zq/412089599-590870466519171-2689894443863566184-n-1.jpg']

    },
    {
        ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7BE1IVIjuNOc7uE2lZMXq-Ad-9LViAWni--0LYL0xQ&s',
        sname:'cristiano',
        post:[]
    },
    {
        ava:"https://i.ibb.co/B3YL3YW/397982323-1068531357902078-6086157178992916321-n.jpg",
        sname:'leomessi',
        post:['https://64.media.tumblr.com/b1cd82e234cea3b8685f136c1f70c72d/tumblr_poopfhhu6N1rjev45o1_1280.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIxFrUD3vJcXxtDz1Y5rYEoRpVpBI1iQIiKHwSNK-fhHH2wQq1z1wdQ-atzmEigjtbfyc&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchk17Zk0bp6dwXXK3UiTY-VILcA2rzXPvWc6KK35fdoiKwGf7TEdlN73EVYTFG283pNM&usqp=CAU']
    },
    {
      ava:'https://i.ibb.co/3m0cnrp/418758070-2278354819026761-6414880944565960628-n.jpg',
      sname:'hathu_87',
      post:[{
        src:'https://i.ibb.co/8zpJf7k/364283526-616519233641265-8216121588764280777-n.jpg',
        name:'Real Madrid',
        like:'62',
        cmt:'69'
        },
        {
        src:'https://i.ibb.co/sKb2s6m/297820422-720274272407925-1068958865673574752-n.jpg',
        like:'72',
        cmt:'14'
        },
        {
        src:'https://i.ibb.co/7RDW8Fh/294750522-424040849486854-8210206152640149518-n.jpg',
        like:'38',
        cmt:'1'
        },
        {
        src:'https://i.ibb.co/Xt0Zzbx/294540820-3110339699280987-1975250049791228784-n.jpg',
        like:'62',
        cmt:'14'
        },
        {
        src:'https://i.ibb.co/GMS2m0w/294038644-987575965246806-2114696099104085781-n.jpg',
        like:'63',
        cmt:'32'
        },
        {
        src:'https://i.ibb.co/2YfKTzg/81429573-2848255708570386-3079306718558152095-n.jpg',
        like:'43',
        cmt:'1'
        }],
        reel:[{
          src:'https://i.ibb.co/rfK5Pz0/4a81518dd17c7a22236d.jpg',
          view:'12M',
          like:'2M',
          cmt:'699K'
        },{
          src:'https://i.ibb.co/rfK5Pz0/4a81518dd17c7a22236d.jpg',
          view:'12M',
          like:'2M',
          cmt:'699K'
        },{
          src:'https://i.ibb.co/rfK5Pz0/4a81518dd17c7a22236d.jpg',
          view:'12M',
          like:'2M',
          cmt:'699K'
        },{
          src:'https://i.ibb.co/rfK5Pz0/4a81518dd17c7a22236d.jpg',
          view:'12M',
          like:'2M',
          cmt:'699K'
        },{
          src:'https://i.ibb.co/rfK5Pz0/4a81518dd17c7a22236d.jpg',
          view:'12M',
          like:'2M',
          cmt:'699K'
        },{
          src:'https://i.ibb.co/rfK5Pz0/4a81518dd17c7a22236d.jpg',
          view:'12M',
          like:'2M',
          cmt:'699K'
        },{
          src:'https://i.ibb.co/rfK5Pz0/4a81518dd17c7a22236d.jpg',
          view:'12M',
          like:'2M',
          cmt:'699K'
        }],
        tagged:[]
  },
    
  ]);
      const tenn = posts.find(post => post.sname === name);
      const anhs = tenn.post;
      const [activeSection, setActiveSection] = useState('baidang');

  const handleButtonClick = (section) => {

    setActiveSection(section);
  };

  return (
    <div className="timetailpage">
      <div className="buto">
      <button
        className={`buto1 ${activeSection === 'baidang' ? 'active' : ''}`}
        onClick={() => handleButtonClick('baidang')}
      >
        <GridOnIcon style={{ fontSize: '11px' }} /> POSTS
      </button>
      <button
        className={`buto1 ${activeSection === 'baidangg' ? 'active' : ''}`}
        onClick={() => handleButtonClick('baidangg')}
      >
        <InstagramIcon style={{ fontSize: '11px' }} /> REELS
      </button>
      <button
        className={`buto1 ${activeSection === 'baidanggg' ? 'active' : ''}`}
        onClick={() => handleButtonClick('baidanggg')}
      >
        <PortraitIcon style={{ fontSize: '11px' }} /> TAGGED
      </button>
    </div>
      {activeSection === 'baidang' && (
        <div className="baidang">
          {anhs.map((post, index) => (
            <div className="baidang1">
              <div className="baidang11">
                <img key={index} src={post.src} className="heto" alt="" />
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
      )}
      {activeSection === 'baidangg' && (
        <div className="baidangg">
          {tenn.reel.map((post, index) => (
            <div className="baidangg1">
              <div className="baidangg11">
              <img key={index} src={post.src} className="heto" alt="" />
                <h3 className="reelview">{post.view}</h3>
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
      )}
      {activeSection === 'baidanggg' && (
        <div className="baidanggg">
          {tenn.tagged.map((post, index) => (
            <div className="baidang1">
              <div className="baidang11">
                <img key={index} src={post} className="heto" alt="" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Timetail;