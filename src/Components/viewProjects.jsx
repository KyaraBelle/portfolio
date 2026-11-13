import { useState } from "react";
import { API_URL } from "../api";

const ViewProjects = () => {
        const [isAuthenticated] = useState(!!localStorage.getItem('token'));
    const [project, setProject] = useState(null);
    const [message, setMessage] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        input: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.input.trim()) {
        setMessage("Please enter a Project ID.");
        return;
    }

    try {
        const response = await fetch(
            `${API_URL}/api/projects/${formData.input}`, 
            {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
        );

        const data = await response.json();

        if (response.ok) {
            setProject(data);
            setMessage("");
            setIsEditing(false);
        } else {
            setProject(null);
            setMessage("Project not found.");
        }
    } catch (error) {
        console.error(error);
    }
};

    const updateProject = async () => {
        if (!project) {
            setMessage("Search for a project first.");
            return;
        }
        try {
            const response = await fetch(`${API_URL}/api/projects/${project._id}`, {
                method: "PUT",
                headers: { 
                        'Content-Type': 'application/json' ,
                        Authorization: `Bearer ${localStorage.getItem('token')}`},
                body: JSON.stringify(project)
            });

            const data = await response.json();

            if (response.ok) {
                setProject(data);
                setMessage("Project updated successfully.");
            } 
            else {
                setMessage(data.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const deleteProject = async () => {
        if (!project) {
            setMessage("Search for a project first.");
            return;
        }
        try {
            const response = await fetch(`${API_URL}/api/projects/${project._id}`, {
                method: "DELETE",
                headers: { 
                        'Content-Type': 'application/json' ,
                        Authorization: `Bearer ${localStorage.getItem('token')}`}
            });

            const data = await response.json();

            if (response.ok) {
                setProject(null);
                setIsEditing(false);
                setMessage("Project deleted successfully.");
            } 
            else {
                setMessage(data.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="viewProjects">
            
            <form onSubmit={handleSubmit} className="projectSearchForm">

    <label>Search Project By ID:</label>

    <input
        type="text"
        name="input"
        value={formData.input}
        onChange={handleChange}
    />

    <button type="submit">
        Search
    </button>
   {message && (
                <p className="message">{message}</p>
            )}
</form>
            {project && (
        <div className="projectResultCard">

            {!isEditing ? (
                <>
                    <h2>Project Details</h2>

                    <p><strong>ID:</strong> {project._id}</p>
                    <p><strong>Project Title:</strong> {project.title}</p>
                    <p><strong>Project Description:</strong> {project.description}</p>
                    <p><strong>Your Role:</strong> {project.role}</p>
                    <p><strong>Project Outcome:</strong> {project.outcome}</p>

                    <div className="projectActions">

                        <button
                            type="button"
                            className="updateBtn"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit Project
                        </button>

                        <button
                            type="button"
                            className="deleteBtn"
                            onClick={deleteProject}
                        >
                            Delete Project
                        </button>

                    </div>
                </>
            ) : (
                <>
                    <h2>Edit Project</h2>

                    <label>Project Title:</label>
                    <input
                        type="text"
                        value={project.title}
                        onChange={(e) =>
                            setProject({
                                ...project,
                                title: e.target.value
                            })
                        }
                    />

                    <label>Project Description:</label>
                    <textarea
                        value={project.description}
                        onChange={(e) =>
                            setProject({
                                ...project,
                                description: e.target.value
                            })
                        }
                    />

                    <label>Your Role:</label>
                    <input
                        type="text"
                        value={project.role}
                        onChange={(e) =>
                            setProject({
                                ...project,
                                role: e.target.value
                            })
                        }
                    />

                    <label>Project Outcome:</label>
                    <textarea
                        value={project.outcome}
                        onChange={(e) =>
                            setProject({
                                ...project,
                                outcome: e.target.value
                            })
                        }
                    />

                    <div className="projectActions">

                        <button
                            type="button"
                            className="updateBtn"
                            onClick={async () => {
                                await updateProject();
                                setIsEditing(false);
                            }}
                        >
                            Save Changes
                        </button>

                        <button
                            type="button"
                            className="deleteBtn"
                            onClick={() => setIsEditing(false)}
                        >
                            Cancel
                        </button>

                    </div>
                </>
            )}

        </div>
    )}


        </div>
    )

   

}

export default ViewProjects;