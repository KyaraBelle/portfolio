import {Link} from 'react-router-dom'

const Layout = () => {
    return (
        <>
        <div className="navBox">
            <h1>My Portfolio</h1>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/about">About Me</Link> | 
                <Link to="/projects">Projects</Link> | 
                <Link to="/education">Education</Link> | 
                <Link to="/services">Services</Link> | 
                <Link to="/contact">Contact</Link>
            </nav>
            <hr />
        </div>
        </>
    )
}

export default Layout;