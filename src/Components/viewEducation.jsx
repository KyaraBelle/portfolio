import { useState } from "react";

const ViewEducation = () => {
        const [isAuthenticated] = useState(!!localStorage.getItem('token'));
    const [education, setEducation] = useState(null);
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
        setMessage("Please enter a Education ID.");
        return;
    }

    try {
        const response = await fetch(
            `/api/education/${formData.input}`, 
            {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
        );

        const data = await response.json();

        if (response.ok) {
            setEducation(data);
            setMessage("");
            setIsEditing(false);
        } else {
            setEducation(null);
            setMessage("Education not found.");
        }
    } catch (error) {
        console.error(error);
    }
};

    const updateEducation = async () => {
        if (!education) {
            setMessage("Search for an education first.");
            return;
        }
        try {
            const response = await fetch(`/api/education/${education._id}`, {
                method: "PUT",
                headers: { 
                        'Content-Type': 'application/json' ,
                        Authorization: `Bearer ${localStorage.getItem('token')}`},
                body: JSON.stringify(education)
            });

            const data = await response.json();

            if (response.ok) {
                setEducation(data);
                setMessage("Education updated successfully.");
            } 
            else {
                setMessage(data.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const deleteEducation = async () => {
        if (!education) {
            setMessage("Search for an education first.");
            return;
        }
        try {
            const response = await fetch(`/api/education/${education._id}`, {
                method: "DELETE",
                headers: { 
                        'Content-Type': 'application/json' ,
                        Authorization: `Bearer ${localStorage.getItem('token')}`}
            });

            const data = await response.json();

            if (response.ok) {
                setEducation(null);
                setIsEditing(false);
                setMessage("Education deleted successfully.");
            } 
            else {
                setMessage(data.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="viewEducation">
            {message && (
                <p className="message">{message}</p>
            )}
            
            <form onSubmit={handleSubmit} className="educationSearchForm">

    <label>Search Education By ID:</label>

    <input
        type="text"
        name="input"
        value={formData.input}
        onChange={handleChange}
    />

    <button type="submit">
        Search
    </button>

</form>
            {education && (
        <div className="educationResultCard">

            {!isEditing ? (
                <>
                    <h2>Education Details</h2>

                    <p><strong>ID:</strong> {education._id}</p>
                    <p><strong>Program:</strong> {education.program}</p>
                    <p><strong>Institution:</strong> {education.school}</p>
                    <p><strong>Years:</strong> {education.years}</p>
                    <p><strong>Credential:</strong> {education.credential}</p>

                    <div className="educationActions">

                        <button
                            type="button"
                            className="updateBtn"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit Education
                        </button>

                        <button
                            type="button"
                            className="deleteBtn"
                            onClick={deleteEducation}
                        >
                            Delete Education
                        </button>

                    </div>
                </>
            ) : (
                <>
                    <h2>Edit Education</h2>

                    <label>Program</label>
                    <input
                        type="text"
                        value={education.program}
                        onChange={(e) =>
                            setEducation({
                                ...education,
                                program: e.target.value
                            })
                        }
                    />

                    <label>Institution:</label>
                    <input
                        type="text"
                        value={education.school}
                        onChange={(e) =>
                            setEducation({
                                ...education,
                                school: e.target.value
                            })
                        }
                    />

                    <label>Years:</label>
                    <input
                        type="text"
                        value={education.years}
                        onChange={(e) =>
                            setEducation({
                                ...education,
                                years: e.target.value
                            })
                        }
                    />

                    <label>Credential:</label>
                    <input
                        type="text"
                        value={education.credential}
                        onChange={(e) =>
                            setEducation({
                                ...education,
                                credential: e.target.value
                            })
                        }
                    />

                    <div className="educationActions">

                        <button
                            type="button"
                            className="updateBtn"
                            onClick={async () => {
                                await updateEducation();
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

export default ViewEducation;