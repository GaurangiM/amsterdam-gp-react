import axios from 'axios';
import { useState, useEffect } from 'react'
import Patient from '../../components/Patient/Patient'

const PatientDatabase = (props)=> {
    const [doctorsData, setDoctorsData] = useState();
    const [patientsData, setPatientsData] = useState();
    const [matchedPatients, setMatchedPatients] = useState();

    useEffect(()=> {
        const fetchDoctorsData = async()=> {
            try {
                const response = await axios.get("https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors")
                console.log(response.data);
                setDoctorsData(response.data)
            }catch(error) {
                console.log(error)
            }
        }

        const fetchPatientsData = async()=> {
            try {
                const response = await axios.get("https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients")
                console.log(response.data);
                setPatientsData(response.data)
            }catch(error) {
                console.log(error)
            }
        }
        fetchDoctorsData()
        fetchPatientsData()
    },[])

    const selectHandler= (id)=> {
        console.log(id);
        const matchedPatients = patientsData.filter(patient=> 
            parseInt(patient.doctorId) === parseInt(id))
        console.log(matchedPatients);
        setMatchedPatients(matchedPatients);
    }

    return (
        <div className="PatientDatabase">
            <h2>Patient Database</h2>
            {doctorsData && (
                <div>
                    Doctor
                    <select onChange={(e)=> selectHandler(e.target.value)}>
                        <option>---Select---</option>
                        {doctorsData.map(doctor=> {
                            return <option key={doctor.id}
                                            doctorID={doctor.id}
                                            value={doctor.id}>{doctor.doctor}</option>
                        })}
                    </select>
                    {matchedPatients && (
                        <div>
                            {matchedPatients.map(patient=> {
                                return <Patient key={patient.id}
                                                id={patient.id}
                                                dob={patient.dateOfBirth}
                                                name={patient.firstName}/>
                            })}
                        </div>
                    )}
                    {!matchedPatients && <p>Select your name to get patients data</p>}
                </div>
            )}
        </div>
    )
}

export default PatientDatabase;