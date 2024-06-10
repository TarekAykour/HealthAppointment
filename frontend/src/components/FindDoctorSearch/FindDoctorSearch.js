import React, { useState } from 'react';
import './FindDoctorSearch.css';

const FindDoctorSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    const specialties = [
        "Cardiology",
        "Dermatology",
        "Gastroenterology",
        "Neurology",
        "Oncology",
        "Pediatrics",
        "Psychiatry",
        "Radiology",
        "Surgery"
    ];

    const handleFocus = () => {
        setShowSuggestions(true);
    };

    const handleBlur = () => {
        setShowSuggestions(false);
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredSpecialties = specialties.filter(specialty =>
        specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="find-doctor-search" onBlur={handleBlur}>
            <input
                type="text"
                className="search-bar"
                placeholder="Search for a specialty..."
                value={searchTerm}
                onChange={handleChange}
                onFocus={handleFocus}
            />
            {showSuggestions && (
                <ul className="suggestions-list">
                    {filteredSpecialties.map((specialty, index) => (
                        <li key={index} className="suggestion-item">
                            {specialty}
                        </li>
                    
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FindDoctorSearch;
