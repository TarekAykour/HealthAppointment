// AppointmentForm.js

import React, { useState } from 'react';

const AppointmentForm = ({ onBookAppointment }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validation logic can be added here
        
        // Check if all fields are filled
        if (name.trim() === '' || date.trim() === '' || time.trim() === '') {
            alert('Please fill out all fields');
            return;
        }

        // Invoke the onBookAppointment function with the form data
        onBookAppointment({ name, date, time });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Book Appointment</h1>
            <label>
               Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Phone number:
                <input type="phone" value={number} onChange={(e) => setNumber(e.target.value)} />
            </label>
            <label>
                Appointment Date:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
            <label>
                Appointment Time:
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </label>
            <button type="submit">Book Appointment</button>
        </form>
    );
};

export default AppointmentForm;
