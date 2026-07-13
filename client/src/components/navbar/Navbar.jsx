import { useState , useContext } from "react";
 import "./navbar.scss" 
 import { Link } from "react-router-dom";
 import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../routes/lib/notificationStore";

 function Navbar() { 

    const [open, setOpen] = useState(false);
    const {currentUser} =  useContext(AuthContext)
  
    const fetch =useNotificationStore((state)=>state.fetch);
    const number =useNotificationStore(state=>state.number);
   fetch();
    return ( 
    <nav> 
        
    <div className = "left"> 
    <a href="/" className="logo"> 
        <img src = "/logo.png" alt=""/> 
        <span>LamaEstate</span>
    </a> 

    <a href = "/">Home</a> 
    <a href = "/">About</a> 
    <a href ="/">Contacts</a> 
    <a href ="/">Agents</a> 
    </div> 
    
    <div className="right"> 
        
    {currentUser ? (
        <div className="user">
            <img src={currentUser.avatar ||"/noAVATAR.png"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
            PROFILE
                {number>0 && <div className="notification">{number}</div> }           
            </Link>
        </div>
    ) : (
        <> 
            <a href="/login">SignIn</a> 
            <a href="/register" className="register">SignUp</a>
        </>
    )}
        <div className="menuIcon"> 
            <img 
                src="/menu.png" 
                alt = ""
                onClick={()=>setOpen((prev)=>!prev)}
                /> 
        </div> 
            
            <div className={open ? "menu active" : "menu"}> 
                <a href ="/">Home</a> 
                <a href ="/">About</a> 
                <a href ="/">Contact</a> 
                <a href ="/">Agents</a> 
                <a href ="/">SignIn</a> 
                <a href ="/">SignUp</a> 
                </div> 
            </div> 
        </nav> 
     ) 
} 
export default Navbar;