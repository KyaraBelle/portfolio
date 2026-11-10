import {Route, Routes} from 'react-router-dom'
import Layout from './Components/layout';
import Home from './Components/home';
import About from './Components/about';
import Projects from './Components/projects';
import Education from './Components/education';
import Services from './Components/services';
import Contact from './Components/contact';
import Login from './Components/login';
import Register from './Components/register';
import ProjectsForm from './Components/projectsForm';
import EduForm from './Components/eduForm';


const MainRouter = () => {
    return (
        <div>
           <Layout />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/education" element={<Education />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/projectsForm" element={<ProjectsForm />} />
                <Route path="/eduForm" element={<EduForm />} />
            </Routes>
        </div>
    )
}

export default MainRouter;