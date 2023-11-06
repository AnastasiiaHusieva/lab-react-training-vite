function BoxColor({ r, g, b }) {
    const rgb = `rgb(${r}, ${g}, ${b})`
    const divStyle = {backgroundColor: rgb};

    return (
        <div className = "BoxColor" style={divStyle}>
            <p>rgb({r}, {g}, {b})</p>
        </div>
    );
}

export default BoxColor;
