//Projects Page- Header and 3 Projects each with 
    // img, title, desc, role, and outcome
import { useState } from "react";

const ProjectsForm = () => {
    const [isAuthenticated] = useState(!!localStorage.getItem('token'));
    return (
        <div className="projectsF">
        {/*Header */}
            <h1>My Projects</h1>
        {/* Hero section holding all 3 projects in 'cards'*/}
            <div className="projectsFormHero">
                {/*Form */}
                <form className="projectsForm" action="/" method="POST">
                    <label>Project Title:</label>
                    <input type="text" id="projectTitle" name="projectTitle" required />
                    
                    <label>Project Description:</label>
                    <textarea id="projectDescription" name="projectDescription" required></textarea>
                    
                    <label>Your Role:</label>
                    <input type="text" id="projectRole" name="projectRole" required />
                    
                    <label>Project Outcome:</label>
                    <textarea id="projectOutcome" name="projectOutcome" required></textarea>
                    <button type="submit" className="projectsFormBtn">Submit Project</button>
                </form>

              

         

           
            </div>
        </div>
    )
}

export default ProjectsForm;