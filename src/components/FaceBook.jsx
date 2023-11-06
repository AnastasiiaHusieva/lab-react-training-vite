import profiles from "../data/berlin.json";
import { useState } from 'react'

function FaceBook() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [displayPr, setDisplayPr] = useState('none');
    const [isStudent, setIsStudent] = useState(null);

    const handleCountryButtonClick = (country) => {
        setSelectedCountry(country);
    }

    const handleTypeButtonClick = (type) => {
        setIsStudent(type === 'Student' ? true : type === 'Teacher' ? false : null);
    }

    const uniqueCountries = [];
    for (const profile of profiles) {
        if (!uniqueCountries.includes(profile.country)) {
            uniqueCountries.push(profile.country);
        }
    }

    const handleInfoContainerClick = () => {
        displayPr === 'none' ? setDisplayPr('block') : setDisplayPr('none')
    }

    const filteredProfiles = profiles.filter((profile) => {
        return (
            (selectedCountry === null || profile.country === selectedCountry) &&
            (isStudent === null || profile.isStudent === isStudent)
        );
    });

    return (
        <div>
            <div className="country-buttons">
                {uniqueCountries.map((country, i) => (
                    <button key={i} onClick={() => handleCountryButtonClick(country)}>
                        {country}
                    </button>
                ))}
            </div>
            <div className="type-buttons">
                <button onClick={() => handleTypeButtonClick('Student')}>Student</button>
                <button onClick={() => handleTypeButtonClick('Teacher')}>Teacher</button>
            </div>


            {profiles.map((profile, i) => (
                <div key={i} onClick={handleInfoContainerClick} className="FaceBook" style={(profile.country === selectedCountry ? { backgroundColor: 'blue', color: 'white' } : {})}>
                    <div>
                        <img className='profile-img' src={profile.img} alt="img profile" />
                    </div>
                    <div style={{ display: displayPr }}>
                        <p>First Name: {profile.firstName}</p>
                        <p>Last Name: {profile.lastName}</p>
                        <p>Country: {profile.country}</p>
                        {profile.isStudent ? <p>Type: Student</p> : <p>Type: Teacher</p>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FaceBook
