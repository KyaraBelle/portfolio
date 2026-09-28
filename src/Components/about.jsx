//About Page- image, detailed text, and button to download resume
const About = () => {
    return (
        <div className="about">
        {/* Hero section holding img, text, and button*/}
            <div className="aboutHero">
                <img src="/profilepic.png" alt="Profile Picture" className="aboutImg"/>

            {/*Header and <p> */}
                <div className="aboutText">
                    <h1>About Me</h1>
                    <p>Hi, I'm Kyara — a software engineering student who enjoys creating clean, aesthetic interfaces and working across both frontend and backend technologies.  I work with HTML, CSS, JavaScript, Python, and Oracle SQL, and I'm currently beginning my journey with React to build more dynamic, modern layouts.</p>

                {/*Button */}
                    <a href="/Resume.pdf" className="btn">
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;