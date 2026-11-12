import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Education = () => {
    const [isAuthenticated] = useState(!!localStorage.getItem('token'));
    const [education, setEducation] = useState([]);
     useEffect(()=> {
            fetchEducation();
        }, []);
        const fetchEducation = async ()=>{
            try{
                const response = await fetch("/api/education", {
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

             {/*Button for logged in*/}
                {isAuthenticated && (
                    <Link to="/eduForm" className="addEduBtn">Add Education</Link>
                )}

                {isAuthenticated && (
                    <Link to="/viewEducation" className="viewEducationBtn">Edit Education</Link>
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