//Contact Page- Header, contact info, and form with
    //first name, last name, phone num, email, message, 
    // and submit that brings user back to home page
const Contact = () => {
    return (
        <div className="contact">
        {/*Header */}
            <h1>Contact Me</h1>
        {/*Hero section holding contact info and form */}
            <div className="contactHero">

            {/*Contact Info */}
                <div className="contactInfo">
                    <p><strong>Email: </strong>kmcquee5@my.centennialcollege.ca</p>
                    <p><strong>Phone: </strong>249-333-3333</p>
                    <p><strong>Location: </strong>Barrie Ontario</p>
                </div>

            {/*Form */}
                <form className="contactForm" action="/">
                    <label>First Name</label>
                    <input type="text" name="fname" required/>
                    
                    <label>Last Name</label>
                    <input type="text" name="lname" required/>

                    <label>Phone Number</label>
                    <input type="text" name="number" required/>

                    <label>Email Address</label>
                    <input type="email" name="email" required/>

                    <label>Message</label>
                    <textarea name="message" required></textarea>

                {/*Submit Button- sends home */}
                    <button type="submit" className="contactBtn">Submit</button>
                </form>
             </div>
        </div>
    )
}

export default Contact;