import MasterCardLogo from './../assets/images/MasterCard_Logo.svg.png';
import VisaLogo from './../assets/images/visa.png';


function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

    const divStyle = {
        backgroundColor: bgColor,
        color: color,
    }

    const hashedNum = '●●●● ●●●● ●●●● ' + number.substring(12)
    const expYear = expirationYear.toString().substring(2)

    const expirationDate = `${expirationMonth}/${expYear}`

    if (type === "Master Card") {
        return <div className="CreditCard" style={divStyle}>
            <div className ="logo">
                <img src={MasterCardLogo} alt="mastercard logo" />
            </div>
            <div><p>{hashedNum}</p></div>
            <div className="container-card">
            <div className ="container-card-exp">
                <p>Expires {expirationDate}</p>
                <p>{bank}</p>
            </div>
            <div className="container-card-exp"><p>{owner}</p></div>
            </div>
        </div>
    } else if (type === "Visa") {
        return <div className="CreditCard" style={divStyle}>
            <div className ="logo">
                <img src={VisaLogo} alt="visa logo" />
            </div>
            <div><p>{hashedNum}</p></div>
            <div className="container-card">
            <div className ="container-card-exp">
                <p>Expires {expirationDate}</p>
                <p>{bank}</p>
            </div>
            <div className="container-card-exp"><p>{owner}</p></div>
            </div>
        </div>
    }  else {
        return <div className="CreditCard">Card type is not supported</div>;
      }
}
export default CreditCard