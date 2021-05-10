import './Patient.css'
import { Link } from 'react-router-dom'

const Patient = (props)=> {
    return (
        <div className="Patient">
            <p>Name : {props.name} {props.lastName}</p>
            <p>ID : {props.id}</p>
            <p>Date of Birth : {props.dob}</p>
            <Link to={`/patientDetails/${props.id}`} >Show Details</Link>
        </div>
    )
}

export default Patient;