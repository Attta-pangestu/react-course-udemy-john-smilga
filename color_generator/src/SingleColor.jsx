import React from 'react'
import { toast } from 'react-toastify';

const SingleColor = ({color,index}) => {
  const {hex, weight } = color;
  console.log(index);
  const copyColor = ({color}) => {
    if(navigator.clipboard) {
      try {
        navigator.clipboard.writeText(`#${color}`)
        toast.success('Color copy succes')
      } catch (error) {
        toast.error('Error copy color')
      }
    }else {
      toast.error('Clipbpard not available')
    }
  } 

  return (
    <article 
        className={index > 10 ? `color color-light` : 'color'} 
        style={{backgroundColor: `#${hex}`}}
        onClick={()=> copyColor({color:hex})}
      >
      <p className='percent-value'>{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  )
}

export default SingleColor