//Services Page- Header and 3 services each with
    //img, title, and short desc
const Services = () => {
    return (
        <div className="services">
        {/*Header */}
            <h1>Services</h1>
        {/*Hero section holding 3 service 'cards'*/}
            <div className="servicesHero">

            {/*Service 1: Web Dev */}
                <div className="servicesCard">
                    <img src="webdev.png" alt="Web Development" className="serviceImg"/>
                    <h2>Web Development</h2>
                    <p>I build websites using HTML, CSS, and JavaScript.</p>
                </div>

            {/*Service 2: Programming */}
                <div className="servicesCard">
                    <img src="programming.png" alt="Programming" className="serviceImg"/>
                    <h2>Programming</h2>
                    <p>I code in Python, C#, and Java.</p>
                </div>

            {/*Service 3: Database */}
                <div className="servicesCard">
                    <img src="database.png" alt="Database" className="serviceImg"/>
                    <h2>Database Design</h2>
                    <p>I build databases using Oracle SQL.</p>
                </div>
            </div>
        </div>
    )
}

export default Services;