import { useState, useEffect } from 'react'

const ContactInfo = (props)=> {
    const [status, setStatus] = useState();
    const [today, setToday] = useState(new Date());
    const [phoneNumber, setPhoneNumber] = useState("020 555 5555");

    useEffect(()=> {
        //const today = new Date();
        console.log(today.getHours(), today.getMinutes());
        (today.getHours() >= 8 && today.getHours() < 17) ?
        setStatus("Open") : setStatus("Closed");
        console.log(status);
    }, [today])

    return (
        <div className="ContactInfo">
            <p>We are : {status}</p>
            <p>To make an appointment</p>
            <p>call : {phoneNumber}</p>
        </div>
    )
}

export default ContactInfo;