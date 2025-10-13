import { Link } from 'react-router-dom'

import './index.css'

const Navbar = () => {

    return (
      <nav className='navbar-container'>
        <h1 className='logo'>SK</h1>
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