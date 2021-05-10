import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = (props)=> {
    return (
        <div className="NavBar"> 
            <NavLink exact to='/' activeClassName="active">Home</NavLink>
            <NavLink to='/doctorSchedule'
                    activeClassName="active">Doctor Schedule</NavLink>
            <NavLink to='/patientSignup'
                    activeClassName="active">Patient Signup</NavLink>
            <NavLink to='/patientDatabase'
                    activeClassName="active">Patient Database</NavLink>
        </div>
    )
}

export default NavBar;