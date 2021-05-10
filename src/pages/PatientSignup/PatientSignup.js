import { useState, useEffect } from 'react'
import './PatientSignup.css'

const PatientSignup = (props)=> {
    const [newPatient, setNewPatient] = useState({firstName: "", lastName: "", email: "", phone: "",
                                                    gender: "", birthDate: "" });
    const [addedNewPatient, setNewPatientAdded] = useState("false");
    return (
        <div className="PatientSignup">
            <h2>Patient Signup Form</h2>
            {addedNewPatient === "false" && (
                <form onSubmit={(e)=> {
                    e.preventDefault();
                    console.log(`New patient details :`)
                    console.log(`First Name : ${newPatient.firstName}`)
                    console.log(`Last Name : ${newPatient.lastName}`)
                    console.log(`Email Address :${newPatient.email}`)
                    console.log(`Phone Number :${newPatient.phone}`)
                    console.log(`Gender :${newPatient.gender}`)
                    console.log(`Date of Birth :${newPatient.birthDate}`)
                    setNewPatient();
                    setNewPatientAdded("true");
                }}>
                    <p>First Name: <input type="text" 
                                          value={newPatient.firstName}
                                          onChange={(e)=> setNewPatient(
                                              {...newPatient, firstName: e.target.value})
                                              }/></p>
                    <p>Last Name: <input type="text" value={newPatient.lastName}
                                        onChange={(e)=> setNewPatient(
                                            {...newPatient, lastName: e.target.value})
                                            } /></p>
                    <p>Email Address: <input type="email" 
                                            value={newPatient.email}
                                            onChange={(e)=> setNewPatient(
                                                {...newPatient, email: e.target.value})
                                                }/></p>
                    <p>Phone Number: <input type="text"
                                            value={newPatient.phone}
                                            onChange={(e)=> setNewPatient(
                                                {...newPatient,phone: e.target.value})
                                                }/></p>
                    <p>Gender: <select onChange={(e)=> setNewPatient(
                        {...newPatient, gender: e.target.value})}>
                        <option>--Select--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select></p>
                    <p>Date of Birth: <input type="date"
                                            value={newPatient.birthDate}
                                            onChange={e=> setNewPatient({...newPatient, birthDate: e.target.value})}/></p>
                    <button>Submit</button>
                </form>
            )}
            {addedNewPatient === "true" && <p>A new patient is added successfully.</p>}
            
        </div>
    )
}

export default PatientSignup;