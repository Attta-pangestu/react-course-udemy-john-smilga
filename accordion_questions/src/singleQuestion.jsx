import { useState } from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

const SingleQuestion = ({title, info, id,  activeId, toggleActive}) => {
    return (
        <article className="question">
            <header>
                <h5>{title}</h5>
                <button className='question-btn' onClick={() => toggleActive(id)}>
                    {activeId === id ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                </button>
            </header>
            
            {
                activeId === id ? <p>{info}</p> : null
            }
            
        </article>
    )
}

export default SingleQuestion