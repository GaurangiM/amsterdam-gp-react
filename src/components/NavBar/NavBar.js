import { NavLink } from 'react-router-dom'

const NavBar = (props)=> {
    return (
        <div className="NavBar"> 
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/doctorSchedule'>Doctor Schedule</NavLink>
            <NavLink to='/patientSignup'>Patient Signup</NavLink>
            <NavLink to='/patientDatabase'>Patient Database</NavLink>
        </div>
    )
}

export default NavBar;