import {useState} from 'react'


function ClickablePicture ({img, imgClicked}) {
    const [imageSrc, setImageSrc] = useState(img)
    const handleClick = () => {
        imageSrc === img ? setImageSrc(imgClicked) : setImageSrc(img)
    }
    return <div>
        <img onClick = {handleClick()} src={imageSrc} alt="image" />
    </div>

}

export default ClickablePicture