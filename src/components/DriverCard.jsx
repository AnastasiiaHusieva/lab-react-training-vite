import Rating from './Rating'
function DriverCard({ name, rating, img, car }) {
    const ratings = rating.toString()
    const cars = car.toString()
    return <div className="DriverCard">
        <div><img src={img} alt={name} /></div>
        <div className="driver-cont">
            <p><strong>{name}</strong></p>
            <Rating>{rating}</Rating>
            <p>{car.model}-{car.licensePlate}</p>
        </div>
    </div>
}
export default DriverCard