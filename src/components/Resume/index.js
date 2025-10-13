import Navbar from '../Navbar'

import './index.css'

const Resume = () => {

    return (
        <>
        <Navbar/>
        <div className='resume-container'>
            <div className='resume-card'>
            <h1 className='resume-heading'>Resume</h1>
            <p className='resume-desc'>You can dowland my resume <a href='https://drive.google.com/file/d/1f_pmDskp8Sjb59fVKvyl3GfUqi8uvRqK/view?usp=sharing'>here</a></p>
             </div>
        </div>

        </>
    )
}

export default Resume