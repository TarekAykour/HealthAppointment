import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/Landing_Page/LandingPage';
import DoctorsPage from './components/DoctorsPage/DoctorsPage';
import AppointmentForm from './components/AppointmentForm/AppointmentForm';
import FindDoctorSearch from './components/FindDoctorSearch/FindDoctorSearch';
import DoctorCard from './components/DoctorCard/DoctorCard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/doctors" component={DoctorsPage} />
          <Route path="/appointment" component={AppointmentForm} />
          <Route path="/find-doctor" component={FindDoctorSearch} />
          <Route path="/doctor/:id" component={DoctorCard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
