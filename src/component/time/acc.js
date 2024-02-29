import { Avatar } from '@mui/material';
import '../time/index.css'
function Acc({name,ava}) {
  return (
    <div className='suggestion_username'>
            <div className='username_left'>
              <span className='avater'>
                <Avatar>
                <img src={ava} className='heo' alt=''/>
                </Avatar>
              </span>
              <div className='username_info'>
                <span className='username'>{name}</span>
                <span className='relation'>New to Instagram</span>
              </div>
            </div>
            <button className='Follow_button'>Follow</button>
          </div>
  );
}

export default Acc;