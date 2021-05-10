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
    

    const selectHandler= (e)=> {
        const id= e.target.value;
        console.log(e.target.value);
        if(id === 'all')
        {
            const sortedPatients = [...patientsData].sort((a,b)=> {
                return a.lastName.localeCompare(b.lastName)
           })
           console.log(sortedPatients)
           setMatchedPatients(sortedPatients);
            
        } else {
            const matchedPatients = patientsData.filter(patient=> 
                parseInt(patient.doctorId) === parseInt(id))
            console.log(matchedPatients);
            const sortedPatients = [...matchedPatients].sort((a,b)=> {
                 return a.lastName.localeCompare(b.lastName)
            })
            console.log(sortedPatients)
            setMatchedPatients(sortedPatients);
        }
        
    }

    return (
        <div className="PatientDatabase">
            <h2>Patient Database</h2>
            {doctorsData && (
                <div>
                    Doctor
                    <select onChange={(e)=> selectHandler(e)}>
                        <option value='all'>All</option>
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
                                                name={patient.firstName}
                                                lastName={patient.lastName}/>
                            })}
                        </div>
                    )}
                    
                    {(!matchedPatients && patientsData) && (
                        
                        <div>
                        {patientsData.map(patient=> {
                            return <Patient key={patient.id}
                                            id={patient.id}
                                            dob={patient.dateOfBirth}
                                            name={patient.firstName}/>
                        })}
                    </div>
                    )}
                    
                </div>
            )}
        </div>
    )
}

export default PatientDatabase;