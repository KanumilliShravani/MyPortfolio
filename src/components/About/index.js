import Navbar from '../Navbar'

import  './index.css'

const About = () => {
    return (
       <>
       <Navbar/>
        <div className='about-container'>
          <h1 className='about-heading'>About</h1>
          <p className='about-desc'>I'm a full-stack web developer who helps buisnesses and individuals turn ideas into 
            powerful, functional, and visually engaging web applications. With hands-on experience in technologies like Reactjs, Nodejs,
            Express, and Sql, I build end-to-end solutions that are responsive, fast, and scalable.
            <br/>
            I'm particularly passionate about solving complex problems, optimizing user experiences, and delivering high-quality products - whether it's a 
            landing page or an e-commerce platform.If you're looking for someone who can code, think strategically, and deliver results - let's connect!
          </p>
        </div>
       </>
    )
}

export default About