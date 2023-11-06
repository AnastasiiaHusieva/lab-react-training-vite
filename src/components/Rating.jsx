function Rating ({children}) {
    const rating = Math.round(children)
    const fullStars = Math.min(5, rating);
    const emptyStars = 5 - fullStars;
    const fullStar = '★';
    const emptyStar = '☆';
   
    return <div>
          {Array(fullStars).fill(fullStar).map((star, index) => (
            <span key={index}>
              {star}
            </span>
          ))}
          {Array(emptyStars).fill(emptyStar).map((star, index) => (
            <span key={index} >
              {star}
            </span>
          ))}
        </div>
    }

export default Rating