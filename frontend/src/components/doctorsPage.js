import React, { useState } from 'react';
import '../App.css';
import DoctorCard from './DoctorCard/DoctorCard';
import FindDoctorSearch from './FindDoctorSearch/FindDoctorSearch';

const DoctorsPage = () => {
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    // Sample data for doctors
    const doctors = [
        {
            id: 1,
            name: "Dr. John Doe",
            experience: 10,
            rating: 4.5,
            image: "doctor1.jpg",
            careerProfile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            specialties: "Oncology"
        },
        // {
        //     id: 2,
        //     name: "Dr. Peter",
        //     experience: 10,
        //     rating: 4.5,
        //     image: "doctor1.jpg",
        //     careerProfile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        //     specialties: "Psychiatry"
        // },
        // {
        //     id: 3,
        //     name: "Dr. Karen",
        //     experience: 10,
        //     rating: 4.5,
        //     image: "doctor1.jpg",
        //     careerProfile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        //     specialties: "Pediatrics"
        // },
        // {
        //     id: 4,
        //     name: "Dr. John Doe",
        //     experience: 10,
        //     rating: 4.5,
        //     image: "doctor1.jpg",
        //     careerProfile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        //     specialties: "Cardiology"
        // },
        // Add more doctors here
    ];

    // Filter doctors based on specialty
    const filterDoctors = (searchTerm) => {
        if (!searchTerm) {
            setFilteredDoctors(doctors); // Show all doctors if searchTerm is empty
        } else {
            const filtered = doctors.filter(
                doctor => doctor.specialties.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredDoctors(filtered);
        }
    };

    return (
        <div className='doctorsPage'>
            <h1>Find a Doctor</h1>
            <FindDoctorSearch setFilteredSpecialties={filterDoctors} />
            <div className="doctor-cards-container">
                {doctors.map(doctor => (
                    <DoctorCard
                        key={doctor.id}
                        name={doctor.name}
                        experience={doctor.experience}
                        rating={doctor.rating}
                        image={doctor.image}
                        careerProfile={doctor.careerProfile}
                        specialty={doctor.specialties}
                    />
                ))}
            </div>
        </div>
    );
};

export default DoctorsPage;
