import { useState } from 'react'
import SingleColorPicker from './SingleColorPicker'


function RGBColorPicker() {
    const [rValue, setRValue] = useState(0)
    const [gValue, setGValue] = useState(0)
    const [bValue, setBValue] = useState(0)

    const handleColorChange = (color, value) => {
        if (color === 'r') setRValue(value)
        else if (color === 'g') setGValue(value)
        else if (color === 'b') setBValue(value)
    }


    return <div>
        <div  className ="color-cont">
        <div
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'red',
            }}></div>

        <SingleColorPicker
            color="r"
            value={rValue}
            onChange={(color, value) => handleColorChange(color, value)}
        />
        </div>
       <div className ="color-cont">
       <div
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'green',
            }}></div>

        <SingleColorPicker
            color="g"
            value={gValue}
            onChange={(color, value) => handleColorChange(color, value)}
        />
       </div>
       <div className ="color-cont"> 
        <div
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'blue',
            }}>
        </div>

        <SingleColorPicker
            color="b"
            value={bValue}
            onChange={(color, value) => handleColorChange(color, value)}
        /></div>
        <div className="color-cont">
            <div 
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: `rgb(${rValue},${gValue},${bValue})`,
            }}>
            </div>
            <p>You picked this color: rgb({rValue}, {gValue}, {bValue})</p>
        </div>
        

    </div>
}

export default RGBColorPicker