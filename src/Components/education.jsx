import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../api";
const Education = () => {
    const [isAuthenticated] = useState(!!localStorage.getItem('token'));
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    const [education, setEducation] = useState([]);
     useEffect(()=> {
            fetchEducation();
        }, []);
        const fetchEducation = async ()=>{
            try{
                const response = await fetch(`${API_URL}/api/education`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                const data = await response.json();
                if (response.ok){
                    console.log(data);
                    setEducation(data);
                }
            } catch (error){
                console.error(error);
            }
        }
    
    return (
        <div className="education">
        {/*Header */}
            <h1>Education</h1>

             {/*Buttons for Admin*/}
                {isAdmin && (
                    <Link to="/eduForm" className="addEduBtn">Add Education</Link>
                )}

                {isAdmin && (
                    <Link to="/viewEducation" className="viewEducationBtn">Edit Education</Link>
                )}

            {/*Button for Logged in*/}
                {isAuthenticated  && !isAdmin&&(
                    <Link to="/viewEducation" className="viewEducationBtn">Search Education</Link>
                )}

        {/*Hero section holding 2 education listings in 'cards' */}
            <div className="educationHero">

            {/*Education 1: Software Engineering */}
                <div className="eduCard">
                    <img src="centennial.png" alt="Software Engineering" className="eduImg"/>
                    <h2>Software Engineering Technician</h2>
                    <p><strong>Institution: </strong>Centennial College</p>
                    <p><strong>Years: </strong>2025-Present</p>
                    <p><strong>Credential: </strong>Ontario College Diploma (In Progress)</p>
                </div>

            {/*Education 2: Office Admin */}
                <div className="eduCard">
                    <img src="georgian.png" alt="" className="eduImg"/>
                    <h2>General Office Administration</h2>
                    <p><strong>Institution: </strong>Georgian College</p>
                    <p><strong>Years: </strong>2024</p>
                    <p><strong>Credential: </strong>Ontario College Certificate</p>
                </div>
            </div>

            <div className="newEducationContainer">{education.map((education)=>(
                    <div key={education._id} className="NeweducationCard">
                        <img src="NewEdu.png" alt="New Education" className="NeweducationImg"/>
                        <h2>{education.program}</h2>
                        

        <p>
            <strong>Institution: </strong>
            {education.school}
        </p>

        <p>
            <strong>Years: </strong>
            {education.years}
        </p>
        <p>
            <strong>Credential: </strong>
            {education.credential}
        </p>
                    </div>
                ))}
                </div>
        </div>
    )
}

export default Education;