import { Link } from 'react-router-dom'
import './HomePage.css'
import ContactInfo from '../../components/ContactInfo/ContactInfo'

const HomePage = (props)=> {
    

    return (
        <div className="HomePage">
            <ContactInfo/>
            <Link to='/doctorSchedule'>Who is on duty ?</Link>
            <Link to='/patientSignup'>I am a new Patient</Link>
        </div>
    )
}

export default HomePage;