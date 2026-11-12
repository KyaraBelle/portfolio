import { useState } from "react";

const EduForm = () => {
    const [isAuthenticated] = useState(!!localStorage.getItem('token'));
     const [message, setMessage] = useState("");

      {/*Backend Logic */}
             const [formData, setFormData] = useState({
                 programName: '',
                 institution: '',
                 years: '',
                 crediential: '',
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
                     const response = await fetch('/api/education', { 
                         method: 'POST', 
                         headers: { 
                             'Content-Type': 'application/json' ,
                             Authorization: `Bearer ${localStorage.getItem('token')}`},
                         body: JSON.stringify({
                             program : formData.programName,
                             school : formData.institution,
                             years : formData.years,
                             credential : formData.credential,
                         })
                     });
                     const data = await response.json();
                     if (response.ok) {
                         console.log('Project sent successfully:', data);
                         setMessage("Project sent successfully!");
                         setFormData({
                             programName: '',
                             institution: '',
                             years: '',
                             crediential: '',
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
        <div className="eduF">
        {/*Header */}
            <h1>Education</h1>
        {/* Hero section */}
            <div className="eduFormHero">
                {message && (
                        <p className="message">{message}</p>
                    )}

                {/*Form */}
                <form className="eduForm" action="/" onSubmit={handleSubmit}>
                    <label>Program Name:</label>
                    <input type="text" id="programName" name="programName" value={formData.programName} onChange={handleChange} required />
                    
                    <label>Institution:</label>
                    <textarea id="institution" name="institution" value={formData.institution} onChange={handleChange} required></textarea>
                    
                    <label>Years:</label>
                    <input type="text" id="years" name="years" value={formData.years} onChange={handleChange} required />
                    
                    <label>Credential:</label>
                    <textarea id="credential" name="credential" value={formData.credential} onChange={handleChange} required></textarea>
                    
                    <button type="submit" className="eduFormBtn">Submit Education</button>
                </form>

              

         

           
            </div>
        </div>
    )
}

export default EduForm;