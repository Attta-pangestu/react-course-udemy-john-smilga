import React, { useEffect, useState } from 'react'
import { shortList, list, longList} from './data'
import {FaQuoteRight} from 'react-icons/fa'
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi'

const Carousel = () => {
  const [people, setPeople] = useState(longList);
  const [currentPeople, setCurrentPeople] = useState(0);
  
  const prevSlide = () => {
    if(currentPeople === 0) return setCurrentPeople(people.length - 1);
    setCurrentPeople(currentPeople - 1);
  }
  const nextSlide = () => {
    if(currentPeople === people.length - 1) return setCurrentPeople(0);
    setCurrentPeople(currentPeople + 1)
  }


  useEffect(() =>{
    let sliderId  = setInterval(() => {
      nextSlide()
    }, 1500);
    return () => {
        clearInterval(sliderId)
    }
  }, [currentPeople])


  return (
    <section className='slider-container'>
        {  
            people.map((person, personIndex) => {
                const {id, image, name, title, quote} = person;
               return (
                    <article  className='slide' style={{'transform': `translateX(${100 * (personIndex - currentPeople)}%)`}} key={id}>
                        <img src={image} alt={title} className='person-img'/>
                        <p className='name'>{name}</p>
                        <p className='title'>{title}</p>
                        <p className='text'>{quote}</p>
                        <FaQuoteRight className='icon' />
                    </article>
               ) 
            }
        )}
        <button type='button' className='prev' onClick={() => prevSlide()}>
            <FiChevronLeft />
        </button>
        <button type='button' className='next' onClick={() => nextSlide()}>
            <FiChevronRight />
        </button>
    </section>
  )
}

export default Carousel