import React from 'react';
import SectionTitle from '../../components/SectionTitle'; 

function Contact() {
    const user = {
        address: "Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code",
        email: "info@springdale.edu",
        mobile: "+1 (245) 226-22900",
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '20px',
        padding: '20px',
        border: '2px solid #135e4c82',
        borderRadius: '10px',
        textAlign: 'center',
    };

    const imageStyle = {
        height: '200px',
        width: 'auto',
    };

    const textStyle = {
        color: 'yellow',
        fontSize: '18px',
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <SectionTitle title='Contact Us'/>
            <div style={containerStyle}>
                <img 
                    src="https://oneplanet.com/wp-content/uploads/2023/10/contact.png" 
                    style={imageStyle} 
                    alt="Contact" 
                />
                <div style={textStyle}>
                    <p>Email: {user.email}</p>
                    <p>Mobile: {user.mobile}</p>
                    <p>Address: {user.address}</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;

