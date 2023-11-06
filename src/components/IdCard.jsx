function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return <div className = "profile-card">
        <div><img src={picture} alt={lastName} /></div>
        <div>
            <p><strong>Name:</strong>{lastName} {firstName}</p>
            <p><strong>Gender:</strong>{gender}</p>
            <p><strong>Height:</strong>{height}</p>
            <p><strong>Birth: </strong>{birth.toDateString()}</p>
        </div>

    </div>
}

export default IdCard