import {Link} from "react-router-dom";
import { useState } from "react";

{/*Backend Logic */}
const Register = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: ''
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
            const response = await fetch('/api/users', { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify({ 
                    name: formData.fullname, 
                    email: formData.email, 
                    password: formData.password }) });

                const data = await response.json();

               if (response.ok) {
                 localStorage.setItem('token', data.token);
                    console.log("Token saved");
                } else {
                    console.error('Error:', data.message);
                    return;
                }

        } catch (error) {
            console.error('Error:', error);
        }
    };

    {/*Page */}
    return (
        <div className="register">
        {/*Page header/welcome message */}
            <h1>Register</h1>

        {/*Hero section */}
            <div className="registerHero">
                <p> </p>
               

                 {/*Form */}
                <form className="registerForm" action="/" onSubmit={handleSubmit}>
                    <label>Full Name</label>
                    <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required/>
                    
                    <label>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required/>

                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required/>

                {/*Submit Button- sends home */}
                    <button type="submit" className="registerBtn">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;