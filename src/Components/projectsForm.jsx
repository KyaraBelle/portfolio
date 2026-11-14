//Projects Page- Header and 3 Projects each with 
    // img, title, desc, role, and outcome
import { useState } from "react";
import { API_URL } from "../api";

const ProjectsForm = () => {
    const [isAuthenticated] = useState(!!localStorage.getItem('token'));
    const isAdmin = localStorage.getItem("isAdmin") === "true";

    if (!isAdmin){
        return (
            <div className="projectF">
                <h1>Access Denied</h1>
                <p>Only administrators can create projects.</p>
            </div>
        );
    }
    const [message, setMessage] = useState("");
   
     {/*Backend Logic */}
        const [formData, setFormData] = useState({
            projectTitle: '',
            projectDescription: '',
            projectRole: '',
            projectOutcome: '',
        });
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await fetch(`${API_URL}/api/projects`, { 
                    method: 'POST', 
                    headers: { 
                        'Content-Type': 'application/json' ,
                        Authorization: `Bearer ${localStorage.getItem('token')}`},
                    body: JSON.stringify({
                        title : formData.projectTitle,
                        description : formData.projectDescription,
                        role : formData.projectRole,
                        outcome : formData.projectOutcome,
                    })
                });
                const data = await response.json();
                if (response.ok) {
                    console.log('Project sent successfully:', data);
                    setMessage("Project sent successfully!");
                    setFormData({
                        projectTitle: '',
                        projectDescription: '',
                        projectRole: '',
                        projectOutcome: ''
                    });
                } else {
                    console.error('Error submitting form:', data);
                    setMessage("Failed to send project.");
                   return;
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        };






    return (
        <div className="projectsF">
        {/*Header */}
            <h1>My Projects</h1>
        {/* Hero section holding all 3 projects in 'cards'*/}
            <div className="projectsFormHero">
                {message && (
                        <p className="message">{message}</p>
                    )}
                {/*Form */}
                <form className="projectsForm" action="/" onSubmit={handleSubmit}>
                    <label>Project Title:</label>
                    <input type="text" id="projectTitle" name="projectTitle" value={formData.projectTitle} onChange={handleChange}  required />
                    
                    <label>Project Description:</label>
                    <textarea id="projectDescription" name="projectDescription" value={formData.projectDescription} onChange={handleChange}  required></textarea>
                    
                    <label>Your Role:</label>
                    <input type="text" id="projectRole" name="projectRole" value={formData.projectRole} onChange={handleChange} required />
                    
                    <label>Project Outcome:</label>
                    <textarea id="projectOutcome" name="projectOutcome" value={formData.projectOutcome} onChange={handleChange} required></textarea>
                    <button type="submit" className="projectsFormBtn">Submit Project</button>
                </form>
            
              

         

           
            </div>
        </div>
    )

}

export default ProjectsForm;