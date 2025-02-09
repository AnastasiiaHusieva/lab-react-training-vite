import {useState} from 'react';
import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';


function Dice() {
    const emptyDicey = emptyDice
    const [dice, setDice] = useState(emptyDicey)
    const dices = [ dice1, dice2, dice3, dice4, dice5, dice6 ]
    const handleClick = () => {
        setDice(emptyDice)
    
    setTimeout(() => {
        const indexD = Math.floor(Math.random() * dices.length)
        const randomDice = dices[indexD]
        setDice(randomDice)
    }, 1000)
    }
    return <div onClick={handleClick}>
        <img className = 'Dice' src={dice} alt="dice" />
    </div>

}

export default Dice;