import logo from './logo.svg';
import './App.css';
import FindDoctorSearch from './components/FindDoctorSearch/FindDoctorSearch'
import Navbar from './components/navbar/navbar';
import LandingPage from './components/Landing_Page/LandingPage';
import DoctorCard from './components/DoctorCard/DoctorCard';
import DoctorsPage from './components/doctorsPage';
import AppointmentForm from './components/AppointmentForm/AppointmentForm';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <LandingPage/>
        <DoctorsPage/>
        <AppointmentForm/>
    </div>
  );
}

export default App;
