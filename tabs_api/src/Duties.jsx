import React from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa';

const Duties = ({duties}) => {
  return (
    <div>
        {duties.map((duty,index) => (
            <div key={index} className='job-dex'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
            </div>
        ))}
    </div>
  )
}

export default Duties
