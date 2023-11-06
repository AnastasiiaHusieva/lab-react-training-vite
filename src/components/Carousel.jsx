import { useState } from "react"
function Carousel ({images}) {
    const [imageIndex, setImageIndex] = useState(0)

    const previousImg = () => {
        setImageIndex((imageIndex-1)%images.length)
    }
    const nextImg = () => {
        setImageIndex((imageIndex+1)%images.length)
    }

    return <div className = 'Carousel'>
        <button className="Carousel-button" onClick = {previousImg}>Left</button>
        <img className="Carousel-image" src={images[imageIndex]} alt="photoCarousel" />
        <button className="Carousel-button" onClick = {nextImg}>Right</button>
    </div>
}
export default Carousel