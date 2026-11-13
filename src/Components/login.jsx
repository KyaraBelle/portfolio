import {Link} from "react-router-dom";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { API_URL } from "../api";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    {/*Backend Logic */}
      const [formData, setFormData] = useState({
            email: '',
            password: ''
        });

    const [message, setMessage] = useState('');


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
            const response = await fetch(`${API_URL}/api/signin`, { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify({ 
                    email: formData.email, 
                    password: formData.password }) });

                const data = await response.json();
                console.log(data);

               if (response.ok) {
                 localStorage.setItem('token', data.token);
                    console.log("Token saved");
                    //  setMessage("Login successful, token saved");
                    window.location.href = '/';
                } else {
                    console.error('Error:', data.message);
                    setMessage(data.message);
                    return;
                }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    {/*Page */}
    return (
        <div className="login">
        {/*Page header/welcome message */}
            <h1>Login</h1>

        {/*Hero section */}
            <div className="loginHero">
               

                  {/*Form */}
                <form className="loginForm" action="/" onSubmit={handleSubmit}>
                    <label>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required/>

                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required/>

                {/*Submit Button- sends home */}
                    <button type="login" className="loginBtn">Login</button>

                     {/*Button to register page*/}
                     <p>Don't have an account? </p>
                    <Link to="/register" className="regBtn">
                      Register here
                    </Link>
                     <p>{message}</p>
                </form>

                
            </div>
        </div>
    );
};

export default Login;