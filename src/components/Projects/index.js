import './index.css'

import Navbar from '../Navbar'

const projectList = [
    {
        "id": 1,
        "name":"My Portfolio",
        "image":"https://res.cloudinary.com/dqkvvulgz/image/upload/v1760370271/Screenshot_2025-10-13_211357_dsuzuk.png",
        "description":"My portfoilo website is my own front-end project built using reactjs and css",
         "link":""
    },
    {
        "id": 2,
        "name":"NxtTrends-Ecommerce",
        "image":"https://res.cloudinary.com/dqkvvulgz/image/upload/v1760075840/Screenshot_2025-10-10_112335_kmojse.png",
        "description":"An e-commerce front-end website built using reactjs and css.",
        "link":"https://ksnxttrend.ccbp.tech"
    },
    {
        "id": 3,
        "name":"JOBBY-App",
        "image":"https://res.cloudinary.com/dqkvvulgz/image/upload/v1760369102/jobbyapp_v4nyz9.png",
        "description":"A Job application front-end website built using reactjs and css.",
        "link":"https://ksajobbyapp.ccbp.tech/login"
    },
    
]

const Projects = () => {

    return (
        <>
        <Navbar/>
        <div className='projects-container'>
        <h1 className='projects-heading'>You can find my projects here.</h1>
        <div>
            <ul className='project-list-card'>
                {projectList.map(each => 
                    (
                    <li className='project-list-container' key={each.id}>
                        <h1 className='project-name'>{each.name}</h1>
                        <img className='project-image'  src={each.image} alt={each.name.toLowerCase()} />
                        <p className='project-desc'>{each.description} <a href={each.link}>Visit here</a></p>
                        
                    </li>
                    )
                )}

            </ul>
        </div>
        </div>
        </>
    )
}

export default Projects