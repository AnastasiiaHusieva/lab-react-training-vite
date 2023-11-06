function Random ({min, max}) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return <div className = "Random">
        <p>Random value between {min} and {max} is {randomNum}</p>
    </div>
}

export default Random