//Projects Page- Header and 3 Projects each with 
    // img, title, desc, role, and outcome
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Projects = () => {
    const [isAuthenticated] = useState(!!localStorage.getItem('token'));
    const [projects, setProjects] = useState([]);
    useEffect(()=> {
        fetchProjects();
    }, []);
    const fetchProjects = async ()=>{
        try{
            const response = await fetch("/api/projects", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            const data = await response.json();
            if (response.ok){
                console.log(data);
                setProjects(data);
            }
        } catch (error){
            console.error(error);
        }
    }

    return (
        <div className="projects">
        {/*Header */}
            <h1>My Projects</h1>
        {/* Hero section holding all 3 projects in 'cards'*/}
            <div className="projectsHero">

                {/*Button for logged in*/}
                {isAuthenticated && (
                    <Link to="/projectsForm" className="addProjectBtn">Add Project</Link>
                )}

                {isAuthenticated && (
                    <Link to="/viewProjects" className="viewProjectsBtn">Edit Projects</Link>
                )}
                

            {/*Project 1: Pokemon Website */}
                <div className="projectsCard">
                    <img src="project1.png" alt="Baby Pokemon Ranking" className="projectsImg"/>
                    <h2>Baby Pokemon Ranking</h2>
                    <p>Interactive drag-and-drop tier list built with HTML, CSS, and JavaScript.</p>
                    <p><strong>Role: </strong>Designed and developed the full interface, implemented drag-and-drop movement so each baby Pokemon can smoothly shift between tiers how the user wants. </p>
                    <p><strong>Outcome: </strong>Delivered an interactive tier list that feels like a cute mini game.  Users can rearrange their favorites in real time, making the page dynamic.</p>
                </div>

            {/*Project 2: Spa Website */}
                <div className="projectsCard">
                    <img src="project2.png" alt="Spa Services Page" className="projectsImg"/>
                    <h2>Pink Spa Love- Services Page</h2>
                    <p>Spa website including a services page linked to each individual service page with HTML and CSS.</p>
                    <p><strong>Role: </strong>Designed the website fitting the spa's theme, and included all company and service information.</p>
                    <p><strong>Outcome:  </strong>Created a cute, polished page that guides users through spa services in a user-friendly, and aesthetic way.</p>
                </div>

            {/*Project 3: Pic View Website */}
                <div className="projectsCard">
                    <img src="project3.png" alt="Picture Viewer" className="projectsImg"/>
                    <h2>Picture Viewer</h2>
                    <p>A gallery page where users can click images to open a zoomed pop-up view and sort favourites with HTML, CSS, and JavaScript.</p>
                    <p><strong>Role: </strong>Designed the gallery layout and built the pop-up image viewer, including the close button and the “add to favourites” feature that lets users save the pictures they love. </p>
                    <p><strong>Outcome: </strong>Created a photo viewer where the users can enlarge a picture and add to a favourites section, making the page interactive and organized. </p>
                </div>
        </div>
               

                {projects.map((project)=>(
                    <div key={project._id} className="NewprojectsCard">
                        <img src="NewProject.png" alt="New Project" className="NewprojectsImg"/>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>

        <p>
            <strong>Role: </strong>
            {project.role}
        </p>

        <p>
            <strong>Outcome: </strong>
            {project.outcome}
        </p>
                    </div>
                ))}
            
        </div>
    )
}

export default Projects;