import React from 'react'

const Square = ({colorValue}) => {
  return (
    <section
        className='square'
        style={{backgroundColor: colorValue}}
    >
        <p>{colorValue ? colorValue : 'No color.'}</p>
    </section>
  )
}

Square.defaultProps = {
    colorValue: "No color name"
}

export default Square