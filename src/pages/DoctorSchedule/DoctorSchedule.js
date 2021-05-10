import ContactInfo from '../../components/ContactInfo/ContactInfo'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './DoctorSchedule.css'

const DoctorSchedule = (props)=> {
    const [doctorsData, setDoctordData] = useState();

    useEffect(()=> {
        const fetchDoctorData = async()=> {
            try {
                const response = await axios.get("https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors")
                console.log(response.data);
                setDoctordData(response.data);
            }
            catch(error) {
                console.log(error);
            }
        }
        fetchDoctorData();
    }, [])

    return (
        <div className="DoctorSchedule">
            <h2>Doctor Schedule</h2>
            {doctorsData && (
                <div className="doctorList">
                    <table>
                        <tr>
                            <th>Doctor</th>
                            <th>Availability</th>
                        </tr>
                        {doctorsData.map(doctor=> {
                            return (
                                <tr key={doctor.id}>
                                    <td>{doctor.doctor}</td>
                                    <td>{doctor.onDuty ? "On Duty" : "Off Duty"}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            )}
            {!doctorsData && <p>Loading Doctors schedule...</p>}
            <ContactInfo/>
        </div>
    )
}

export default DoctorSchedule;