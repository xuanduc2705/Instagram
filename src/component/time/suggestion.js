import React from 'react';
import { useState } from 'react';
import Acc from './acc';

function Suggestion() {
  const[sugs, setSugs] = useState([
    {
      name:'marcusrashford',
      ava:'https://i.ibb.co/tLHgC5N/324549816-560189929350276-1929429120001572550-n.jpg'
    },
    {
      name:'brunofernandes8',
      ava:'https://i.ibb.co/nwhq2zF/366976566-2271045216438481-6279380124499486678-n.jpg'
    },
    {
      name:'harrymaguire',
      ava:'https://i.ibb.co/x22L3r1/358577637-291517886689511-6806020783820228985-n.jpg'
    },
    {
      name:'andreonana',
      ava:'https://i.ibb.co/wgbR24g/362658626-267596112643393-5461925291843337628-n.jpg'
    },
    {
      name:'duynen_123',
      ava:'https://sohanews.sohacdn.com/160588918557773824/2021/4/28/photo-2-1619616847581933935596.jpeg'
    },
  ])
  return (
    <div className="suggestion">
       <div className='suggestion_title'>
        <div className='sug'>
        Suggesstion for you
        </div>
        <div className='see'>
        See All
        </div>
        </div>
        <div className='suggestion_usernames'>
        {sugs.map(sug=>(
              <Acc
              name = {sug.name}
              ava = {sug.ava}
              />
            ))}
          
        </div>

    </div>
  );
}

export default Suggestion;