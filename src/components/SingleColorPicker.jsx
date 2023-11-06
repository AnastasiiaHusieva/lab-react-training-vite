function SingleColorPicker ({color, value, onChange}) {

    const handleValueChange = (event) => {
        const newValue = parseInt(event.target.value, 10)
        onChange(color, newValue)
      }

    return (
        <div>
          <label>{color.toUpperCase()}:</label>
          <input
            type="number"
            value={value}
            onChange={handleValueChange}
            min={0}
            max={255}
          />
        </div>
      )
    }

    export default SingleColorPicker
