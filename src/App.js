import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css';
import Home from './components/Home';

import Resume from './components/Resume'

import About from './components/About';

import Projects from './components/Projects';

import Contacts from './components/Contacts';

const App = () => (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
     </Routes>
    </BrowserRouter>
)

export default App
