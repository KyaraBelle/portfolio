import { useState } from "react";

const EduForm = () => {
    const [isAuthenticated] = useState(!!localStorage.getItem('token'));
    return (
        <div className="eduF">
        {/*Header */}
            <h1>Education</h1>
        {/* Hero section */}
            <div className="eduFormHero">
                {/*Form */}
                <form className="eduForm" action="/" method="POST">
                    <label>Program Name:</label>
                    <input type="text" id="programName" name="programName" required />
                    
                    <label>Institution:</label>
                    <textarea id="institution" name="institution" required></textarea>
                    
                    <label>Years:</label>
                    <input type="text" id="years" name="years" required />
                    
                    <label>Credential:</label>
                    <textarea id="credential" name="credential" required></textarea>
                    
                    <button type="submit" className="eduFormBtn">Submit Education</button>
                </form>

              

         

           
            </div>
        </div>
    )
}

export default EduForm;