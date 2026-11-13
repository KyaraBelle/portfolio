import {Link} from "react-router-dom";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { API_URL } from "../api";
const Contact = () => {
    const navigate = useNavigate();
    const location = useLocation();
     const [isAuthenticated] = useState(!!localStorage.getItem('token'));
    
    {/*Backend Logic */}
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        number: '',
        email: '',
        message: ''
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
            const response = await fetch(`${API_URL}/api/contacts`, { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName : formData.fname,
                    lastName : formData.lname,
                    phoneNumber : formData.number,
                    email : formData.email,
                    message : formData.message
                })
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Message sent successfully:', data);
                alert('Message sent successfully!');
                setFormData({
                    fname: '',
                    lname: '',
                    number: '',
                    email: '',
                    message: ''
                });
            } else {
                alert('Failed to send message.');
                console.error('Error submitting form:', data);
               return;
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    {/*Page */}
    return (
        <div className="contact">
        {/*Header */}
            <h1>Contact Me</h1>

        {/*Button for logged in*/}
            {isAuthenticated && (
                <Link to="/viewContact" className="viewContactBtn">View Forms</Link>
            )}

        {/*Hero section holding contact info and form */}
            <div className="contactHero">

            {/*Contact Info */}
                <div className="contactInfo">
                    <p><strong>Email: </strong>kmcquee5@my.centennialcollege.ca</p>
                    <p><strong>Phone: </strong>249-333-3333</p>
                    <p><strong>Location: </strong>Barrie Ontario</p>
                </div>

            {/*Form */}
                <form className="contactForm" action="/" onSubmit={handleSubmit}>
                    <label>First Name</label>
                    <input type="text" name="fname" value={formData.fname} onChange={handleChange} required/>
                    
                    <label>Last Name</label>
                    <input type="text" name="lname" value={formData.lname} onChange={handleChange} required/>

                    <label>Phone Number</label>
                    <input type="text" name="number" value={formData.number} onChange={handleChange} required/>

                    <label>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required/>

                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>

                {/*Submit Button- sends home */}
                    <button type="submit" className="contactBtn">Submit</button>
                </form>
             </div>
        </div>
    )
}

export default Contact;