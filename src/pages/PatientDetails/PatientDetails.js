import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import './PatientDetails.css'

const PatientDetails = (props)=> {
    const searchKey = useParams();
    const [patientData, setPatientData] = useState();
    console.log(searchKey);
    useEffect(()=> {
        const fetchData = async()=> {
            try {
                const response = await axios.get(`https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/${searchKey.id}`)
                console.log(response.data);
                setPatientData(response.data)
            }
            catch(error) {
                console.log(error);
            }
        }
        fetchData();
    },[])

    return (
        
        <div className="PatientDetails">
            {patientData && (
                <div>
                    <h2>{patientData.firstName}</h2>
                    <p>ID : {patientData.id}</p>
                    <p>Date of Birth : {patientData.dateOfBirth}</p>
                    <p>Gender : {patientData.gender}</p>
                    <p>Email : {patientData.email}</p>
                    <p>Phone : {patientData.phoneNumber}</p>
                    
                </div>
            )}
            {!patientData && <p>Loading patient data...</p>} 
        </div>
    )
}

export default PatientDetails;