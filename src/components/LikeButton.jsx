import {useState} from 'react'

function LikeButton () {
    const [likes, setLikes] = useState(0)
    const [colorIndex, setColorIndex] = useState(0);
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]
    const LikeBtnStyle = {backgroundColor: colors[colorIndex]}
    const increaseLikes = () => {
        const increasedLikes = likes + 1
        setLikes(increasedLikes)
        setColorIndex((colorIndex+1)%colors.length)
    }

    return <div >
        <button className = 'LikeButton' style = {LikeBtnStyle} onClick={increaseLikes}>{likes} Likes</button>
    </div>
}

export default LikeButton