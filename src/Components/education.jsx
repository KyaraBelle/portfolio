import { useState } from "react";
import { Link } from "react-router-dom";
const Education = () => {
    const [isAuthenticated] = useState(!!localStorage.getItem('token'));
    
    return (
        <div className="education">
        {/*Header */}
            <h1>Education</h1>

             {/*Button for logged in*/}
                {isAuthenticated && (
                    <Link to="/eduForm" className="addEduBtn">Add Education</Link>
                )}
        {/*Hero section holding 2 education listings in 'cards' */}
            <div className="educationHero">
                
            {/*Education 1: Software Engineering */}
                <div className="eduCard">
                    <img src="centennial.png" alt="Software Engineering" className="eduImg"/>
                    <h2>Software Engineering Technician</h2>
                    <p><strong>Institution: </strong>Centennial College</p>
                    <p><strong>Years: </strong>2025-Present</p>
                    <p><strong>Crediential: </strong>Ontario College Diploma (In Progress)</p>
                </div>

            {/*Education 2: Office Admin */}
                <div className="eduCard">
                    <img src="georgian.png" alt="" className="eduImg"/>
                    <h2>General Office Administration</h2>
                    <p><strong>Institution: </strong>Georgian College</p>
                    <p><strong>Years: </strong>2024</p>
                    <p><strong>Crediential: </strong>Ontario College Certificate</p>
                </div>
            </div>
        </div>
    )
}

export default Education;