import {Link} from "react-router-dom";

//Register Page- form for user registration
const Register = () => {
    return (
        <div className="register">
        {/*Page header/welcome message */}
            <h1>Register</h1>

        {/*Hero section */}
            <div className="registerHero">
                <p>
                    Please enter your credentials to register for your account.
                </p>

                 {/*Form */}
                <form className="registerForm" action="/">
                    <label>Full Name</label>
                    <input type="text" name="fullname" required/>
                    
                    <label>Email Address</label>
                    <input type="email" name="email" required/>

                    <label>Password</label>
                    <input type="password" name="password" required/>

                {/*Submit Button- sends home */}
                    <button type="register" className="registerBtn">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;