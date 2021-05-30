import React from "react";
import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
import Button from "../button/button";
import './Navbar.css'

const Navbar = (props) => {
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);
    const [user,setUser]=useState(true);
    const [userprof,setuserprof]=useState()

const handleClick =()=>{
    // if(!click){
    
    //     document.getElementById('test').style.display="flex"

    // }
    // else
    // document.getElementById('test').style.display="none"
    console.log(click)
    setClick(!click)
    console.log(click)
}
const closeMobileMenu=()=>{
    setClick(false);
}
const checkLOgin=()=>{
    const loggedInUser = sessionStorage.getItem('user');
    if(loggedInUser){
        setUser(loggedInUser)
    }
    else{
        setUser()
          
    }
}
const showButton=()=>{
    console.log("Hyhyyy")
    if(window.innerWidth<=960){
        setButton(false);
    }
    else{
        setButton(true);
    }
};
 useEffect(()=>{
     checkLOgin()
showButton()
 },[])
window.addEventListener('resize',showButton)
    return ( 
<>
<nav className="navbar">
    <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        Learn By Research </Link>
<div className="menu-icon" onClick={handleClick}>
    <i className={click? 'fas fa-times':'fas fa-bars'}/>
</div>
<ul className={click ? 'nav-menu active' :'nav-menu'} id='test'>
<li className="nav-item">
    <Link to="/" className='nav-links' onClick={closeMobileMenu} >
        Home
    </Link>
</li>
<li className="nav-item">
    <Link to="/services" className='nav-links' onClick={closeMobileMenu} >
        Open Programmes
    </Link>
</li>
<li className="nav-item">
    <Link to="/products" className='nav-links' onClick={closeMobileMenu} >
        Blogs
    </Link>
</li>
<li className="nav-item">
    <Link to="/login" className='nav-links' onClick={closeMobileMenu} >
    Contact
    </Link>
</li>
<li >
   {user? <Link to="/login" className='nav-links-mobile' onClick={closeMobileMenu} >
        View Profile
    </Link>:<Link to="/signup" className='nav-links-mobile' onClick={closeMobileMenu} >
        Sign Up
    </Link>}
</li>


</ul>
{button ? user?<Link to="/editprofile"><img src="../images/kunj.jpeg" className="profimage"/> </Link> : <Button buttonStyle='btn--outline'>Sign up</Button>:""}
    </div>

</nav>

</>
        
    );
}
 
export default Navbar

