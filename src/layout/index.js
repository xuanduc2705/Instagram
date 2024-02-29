import Nav from "./nav/nav"
import "../layout/index.css"
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
import Messnav from "./nav/messnav";
import SearchNav from "./nav/searchnav";
import NofiNav from "./nav/nofinav";
function Layout({children}){
    const[mess,setMess] = useState(false);
    const location = useLocation();
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [showAnotherNav, setShowAnotherNav] = useState(false);
    const [showAnotherNavi, setShowAnotherNavi] = useState(false);
    const handleSearchClick = () => {
        setIsNavVisible(false);
        setShowAnotherNavi(false)
        setShowAnotherNav(true);
      };
      const handleNavClose = () => {
        setIsNavVisible(true);
        setShowAnotherNav(false)
        setShowAnotherNavi(false);
      };
      const handleNofiClick = () => {
        setIsNavVisible(false);
        setShowAnotherNav(false)
        setShowAnotherNavi(true);
      };
    useEffect(() => {
      if (location.pathname === '/message') {
        setMess(true);
      } else {
        setMess(false);
      }
    }, [location]);
    return(
        <div>
        {mess?(
            <div style={{display:'flex',flexDirection:'row'}} >
            <div className="messsidebar">
              {isNavVisible&&<Messnav onClick={handleSearchClick} onClick2={handleNofiClick}/>}
                {showAnotherNav&&<SearchNav onClick={handleNavClose} onClick2={handleNofiClick}/>}
                {showAnotherNavi&&<NofiNav onClick={handleNavClose} onClick2={handleSearchClick}/>}
            </div>
            <div className="messchildren" style={{width:'100%'}}>
                {children}
            </div>
        </div>
        ):(
            <div className="flex flex-row" >
            <div className="sidebar">
                {isNavVisible&&<Nav onClick={handleSearchClick} onClick2={handleNofiClick}/>}
                {showAnotherNav&&<SearchNav onClick={handleNavClose} onClick2={handleNofiClick}/>}
                {showAnotherNavi&&<NofiNav onClick={handleNavClose} onClick2={handleSearchClick}/>}
            </div>
            <div className="children" onClick={handleNavClose}>
                {children}
            </div>
        </div>
        )}
        </div>
    )
}
export default Layout