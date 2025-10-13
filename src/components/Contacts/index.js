import './index.css'

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Navbar from '../Navbar' 

const Contacts = () => {

    return (
        <>
        <Navbar/>
        <div className='contact-container'>
        <h1 className='contact-heading'>Contact Details</h1>
        <div className='contact-details'>
            <p className='conatact-subheading'>Email: shravani392@gmail.com</p>
        </div>
        <div className='contact-details'>
            <h1 className='contact-heading' >Social Links</h1>
            <div className='social-links'>
              <a className='link' href="https://www.linkedin.com/in/shravani-kanumilli/">  <FaLinkedinIn  className='lin-icon' size={30}/></a>
              <a className='link' href='https://github.com/KanumilliShravani'><FaGithub size={30}/></a>
            </div>
        </div>
        </div>
        </>
    )
}

export default Contacts