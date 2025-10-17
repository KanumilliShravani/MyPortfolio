import { useState } from 'react';

import { Link } from 'react-router-dom'

import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

import './index.css'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const onClickMenu = () => {
   setShowMenu(prevState => !prevState)
  }

  const renderMenu = () =>{
   return(
    <div className='menu-container'>
    <Link className='nav-link' to="/"><p>Home</p></Link>
     <Link className='nav-link' to="/about"><p>About</p></Link>
     <Link className='nav-link' to="/resume"><p>Resume</p></Link>
      <Link className="nav-link" to="/projects"><p>Projects</p></Link>
    <Link  className="nav-link" to="/contacts"><p>Contact</p></Link>
    </div>
   )
  }

    return (
      <nav className='navbar-container'>
          <div className='logo-container'>
         <img className='site-logo' src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1760432472/ChatGPT_Image_Oct_14_2025_02_30_19_PM_zahlv6.png" alt="website-logo" />
          <div className='menu-btn-container'>
          {showMenu ? (<button className='menu-btn' type='button' onClick={onClickMenu}><RxCross2 size={30} className='icon' /></button>): 
          (<button className='menu-btn' type='button' onClick={onClickMenu}><IoMdMenu size={30} className='icon' /></button>)}
          {showMenu && (renderMenu())}
          </div>
        </div>
        <ul className='navbar-list'>
            <Link className='nav-link' to="/"><li className='list-item'>Home</li></Link>
             <Link className='nav-link' to="/about"><li className='list-item'>About</li></Link>
              <Link className='nav-link' to="/resume"> <li className='list-item'>Resume</li></Link>
            <Link className="nav-link" to="/projects"> <li className='list-item'>Projects</li></Link>
             <Link  className="nav-link" to="/contacts"><li className='list-item'>Contacts</li></Link>
        </ul>
        
      </nav>
    )
}

export default Navbar