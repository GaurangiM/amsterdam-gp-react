import './App.css';
import NavBar from './components/NavBar/NavBar'
import {  Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import DoctorSchedule from './pages/DoctorSchedule/DoctorSchedule'
import PatientSignup from './pages/PatientSignup/PatientSignup'
import PatientDatabase from './pages/PatientDatabase/PatientDatabase'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Switch>
          <Route path='/patientDatabase' component={PatientDatabase}></Route>
          <Route path='/patientSignup' component={PatientSignup}></Route>
          <Route path='/doctorSchedule' component={DoctorSchedule}></Route>
          <Route path='/' component={HomePage} exact></Route>
        </Switch>
    </div>
  );
}

export default App;
