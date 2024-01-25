import React from 'react';
import { useState } from "react";
import '../detail/timestory.css'
import { useParams } from 'react-router-dom';


function TimeStory() {
    const{name} = useParams();
    const[posts, setPosts] = useState([
        {
            ava:'https://pbs.twimg.com/profile_images/1669466617409880067/ErRoSTXm_400x400.jpg',
            sname:'judebellingham',
            image:[{
                src:'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F06%2Freal-madrid-signs-jude-bellingham-borussia-dortmund-1.jpg?cbr=1&q=90',
                name:'Real Madrid'
            },
            {
                src:'https://i.guim.co.uk/img/media/38d765dbbe8dfd454da6d688c3e284aa6562b473/0_169_4076_2445/master/4076.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4337eb1e19b6cc3c31598905539f1372',
                name:'FC DortMund'
            },
            {
                src:'https://photo-cms-giaoducthoidai.epicdn.me/w820/Uploaded/2024/ygtmrk/2023_12_29/methode-times-prod-web-bin-2a55b224-053c-11ee-9bf2-8ca4db35d928-823.jpg',
                name:'England'
            },
            {
                src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTbQFtT73N5_uzphYBMDvwheYcfozUUpkrgt6WO2Ec7U2PmmRYrG9qpGWloFoE83RLhk&usqp=CAU',
                name:'Post'
            },
            {
                src:'https://i.pinimg.com/750x/fe/90/31/fe903186576f3193c0220c333d4f4740.jpg',
                name:'Life'
            },
            {
                src:'https://pbs.twimg.com/media/Fo_jU5cWcAAvVE1.jpg',
                name:'MOTM'
            },
            {
                src:'https://www.thesun.co.uk/wp-content/uploads/2023/06/crop-22612501-2.jpg?strip=all&quality=100&w=1080&h=1080&crop=1',
                name:'Birmingham'
            }],
        },
        {
            ava:'https://i.ibb.co/s3TX9zq/412089599-590870466519171-2689894443863566184-n-1.jpg',
            sname:'s.pinkduck_03',
            image:['https://i.ibb.co/s3TX9zq/412089599-590870466519171-2689894443863566184-n-1.jpg','https://i.ibb.co/s3TX9zq/412089599-590870466519171-2689894443863566184-n-1.jpg']

        },
        {
            ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7BE1IVIjuNOc7uE2lZMXq-Ad-9LViAWni--0LYL0xQ&s',
            sname:'cristiano',
            image:[]
        },
        {
            ava:"https://i.ibb.co/B3YL3YW/397982323-1068531357902078-6086157178992916321-n.jpg",
            sname:'leomessi',
            image:['https://64.media.tumblr.com/b1cd82e234cea3b8685f136c1f70c72d/tumblr_poopfhhu6N1rjev45o1_1280.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIxFrUD3vJcXxtDz1Y5rYEoRpVpBI1iQIiKHwSNK-fhHH2wQq1z1wdQ-atzmEigjtbfyc&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchk17Zk0bp6dwXXK3UiTY-VILcA2rzXPvWc6KK35fdoiKwGf7TEdlN73EVYTFG283pNM&usqp=CAU']
        },
        {
            ava:'https://i.ibb.co/3m0cnrp/418758070-2278354819026761-6414880944565960628-n.jpg',
            sname:'hathu_87',
            image:[{
                src:'https://i.ibb.co/xKnhrjZ/328224407-1462864784539232-2577114243373853500-n.jpg',
                name:'❤️'
            },
            {
                src:'https://i.ibb.co/WGmRDWg/66907056-825628564504041-2001892086842948890-n.jpg',
                name:'🏝'
            },
            {
                src:'https://i.ibb.co/8zpJf7k/364283526-616519233641265-8216121588764280777-n.jpg',
                name:'🏖'
            },
            {
                src:'https://i.ibb.co/xFCPgHC/110003138-285735832490805-4261861584315784248-n.jpg',
                name:'🙆‍♀️'
            },
           ],
        },
        
      ]);
      const tenn = posts.find(post => post.sname === name);
      const anhs = tenn.image;
  return (
      <div className='timestory'>
        {anhs.map((post, index) => (
            <div className='yes'>
            <div className='covercover'>
             <div className='coverimage1'>
             <img key={index} src={post.src} className='heto' alt=''/>
             
             </div>
             
             </div>
             <div className='storyname'>{post.name}</div>
             </div>
        ))}
      </div>
  );
}

export default TimeStory;