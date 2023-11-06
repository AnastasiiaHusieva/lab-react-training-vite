function NumbersTable({ limit }) {
    const numsArray = []
    for (let i = 1; i <= limit; i++) {
        const isEven = i % 2 === 0;
        const style = isEven ? { backgroundColor: 'red' } : {};

        numsArray.push(
            <div className='Num' key={i} style={style}>
                {i}
            </div>
        )

    }
   
        return <div className='NumbersTable'>
            {numsArray}
        </div>
}

export default NumbersTable