import {Link} from "react-router-dom";

//Home Page- main intro, and button to about page
const Home = () => {
    return (
        <div className="home">
        {/*Page header/welcome message */}
            <h1>Welcome, I'm Kyara McQueen</h1>

        {/*Hero section holding intro <p> and button */}
            <div className="homeHero">
                <p>
                    Software engineering student who enjoys creating aesthetic interfaces and interactive projects.
                </p>
                {/*Button to about page*/}
                    <Link to="/about" className="btn">
                        Learn More About Me
                    </Link>
            </div>
        </div>
    );
};

export default Home;