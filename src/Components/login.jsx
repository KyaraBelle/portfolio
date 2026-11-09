import {Link} from "react-router-dom";

//Login Page- form for user authentication
const Login = () => {
    return (
        <div className="login">
        {/*Page header/welcome message */}
            <h1>Login</h1>

        {/*Hero section */}
            <div className="loginHero">
                <p>
                    Please enter your credentials to access your account.
                </p>

                  {/*Form */}
                <form className="loginForm" action="/">
                    <label>Email Address</label>
                    <input type="email" name="email" required/>

                    <label>Password</label>
                    <input type="password" name="password" required/>

                {/*Submit Button- sends home */}
                    <button type="login" className="loginBtn">Login</button>
                </form>

                 {/*Button to register page*/}
                    <Link to="/register" className="btn">
                        Don't have an account? Register here
                    </Link>
            </div>
        </div>
    );
};

export default Login;