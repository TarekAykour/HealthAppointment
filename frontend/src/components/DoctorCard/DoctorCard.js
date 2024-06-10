// DoctorCard.js

import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ name, experience, rating, image, careerProfile, specialty }) => {
    return (
        <div className="doctor-card">
            <div className="doctor-card-header">
                <img src={image} alt={name} className="doctor-avatar" />
                <div className="doctor-details">
                    <h2 className="doctor-name">{name}</h2>
                    <p className="doctor-experience">Experience: {experience} years</p>
                    <p className="doctor-rating">Rating: {rating}/5</p>
                </div>
            </div>
            <div className="doctor-card-body">
                <p className="career-profile">{careerProfile}</p>
                <p>speciality: {specialty}</p>
            </div>
            <div className="doctor-card-footer">
                <button className="book-appointment-button">Book Appointment</button>
            </div>
        </div>
    );
};

export default DoctorCard;
