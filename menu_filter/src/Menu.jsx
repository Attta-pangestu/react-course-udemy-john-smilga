import React from 'react'
import MenuItem from './MenuItem'

function Menu({items}) {
    
  return (
    <div className='section-center'>
        {
            items.map((menu) => (
                <MenuItem key={menu.id} {...menu} />
            ))
        }
    </div>
  )
}

export default Menu