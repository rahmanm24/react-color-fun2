import React from 'react'

const Input = ({colorValue, setColorValue}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label >Enter color name:</label>
        <input
            type="text" 
            autoFocus
            placeholder='Enter color name'
            required
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)}
        />
    </form>
  )
}

export default Input