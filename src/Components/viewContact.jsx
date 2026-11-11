import { useState } from "react";
const ViewContact = () => {
    const [formData, setFormData] = useState({
        input: ""
    });
    const [contact, setContact] = useState(null);
    const [contacts, setContacts] = useState([]);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            if (!formData.input.trim()){
                setMessage("Please enter a Contact ID.")
                setContact(null);
                return;
            }
            const response = await fetch(`/api/contacts/${formData.input}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            if (response.ok){
                console.log("Contact Found: ", data);
                setContact(data);
                setMessage("");
            }
            else{
                console.log("Contact Not Found", data.message);
                setContact(null);
                setMessage("Contact not found.");
            }

        }catch(error){
            console.error("Error: ", error);
        }
    }

    const getAllContacts = async () => {
        if (contacts.length >0){
            setContacts([]);
            return;
        }
        try{
            const response = await fetch("/api/contacts");
            const data = await response.json();
            if (response.ok) {
                setContacts(data);
            }
        } catch(error){
            console.error(error);
        }
    }


    return (
        <div className="viewContact">
            {/*Header */}
            <h1>Contacts</h1>

            {/*Hero section */}
            <div className="viewContactHero">
                 {/*Get Contact by ID */}
                <div className="getByID_container">

                    <form className="ConID" onSubmit={handleSubmit}>
                        <label>Search By ID: </label>
                        <input type="text" name="input" id="input" value={formData.input} onChange={handleChange}/>
                        <button type="submit" className="conIDBtn">Search</button>
                    </form>

                    {message && (
                        <p classname="message">{message}</p>
                    )}

                    {contact && (
                        <div className="contactResultCard">
                            <h2>Contact Details</h2>
                            <p>ID: {contact._id}</p>
                            <p>First Name: {contact.firstName}</p>
                            <p>Last Name: {contact.lastName}</p>
                            <p>Phone Number: {contact.phoneNumber}</p>
                            <p>Email: {contact.email}</p>
                            <p>Message: {contact.message}</p>
                        </div>
                    )}
                    


                </div>
             {/*Get All Contacts */} 
                <div className="getAll_container">
                    <button 
                        type="button" 
                        className="getAllBtn" 
                        onClick={getAllContacts}
                    >
                        {contacts.length >0? "Hide Contacts" : "Get All Contacts"}
                    </button>
                    
                    {contacts.length > 0 && (
                        <div className="allContacts">
                            <h2>All Contacts</h2>

                            {contacts.map((contact)=> (
                                <div key={contact._id} className="contactCard">
                                    <p>ID: {contact._id}</p>
                                    <p>First Name: {contact.firstName}</p>
                                    <p>Last Name: {contact.lastName}</p>
                                    <p>Phone Number: {contact.phoneNumber}</p>
                                    <p>Email: {contact.email}</p>
                                    <p>Message: {contact.message}</p>
                                </div>
                            ))}
                        </div>
                    )}

                </div>

            </div>
        </div>
    )
}

export default ViewContact;