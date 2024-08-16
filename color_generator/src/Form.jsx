import React, { useState } from 'react'

const Form = ({handleChangeColors}) => {
    const [color, setColor] = useState('');   
    const handleSubmit = (e) => {
        e.preventDefault();
       handleChangeColors(color)
    }
  return (
    <section className='container'>
        <h4>Color Generator</h4>
        <form className='color-form' onSubmit={(e) => handleSubmit(e)}>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
            <input
                type='text'
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder='#f15025'
            />
            <button type='submit' className='btn' style={{backgroundColor: color}} >Submit</button>
        </form>        
    </section>
  )
}

export default Form