import { useState } from 'react';
import people from './data';
import {FaChevronCircleLeft, FaChevronCircleRight, FaQuoteLeft, FaQuoteRight, } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, image, name, job,text } = people[index];

  function checkNumber(number) {
    if(number > people.length - 1) {
      return 0 ;
    }
    if(number < 0) {
      return people.length -1 ;
    }
    return number;
  }

  function checkNumberByModulus(number) {
    return number % people.length;
  }

  function nextPerson() {
    setIndex((currentIndex) => {
      const newIndex = currentIndex  + 1;
      
      return checkNumberByModulus(newIndex);
    })
  }

  function prevPerson() {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1  ;
      return checkNumberByModulus(newIndex);
    })
  }

  function randomPerson(){
    let random = Math.floor(Math.random() * people.length); 
    setIndex(checkNumber(random));
  }


  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img'/>
          <span className='quote-icon'><FaQuoteRight /></span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}> <FaChevronCircleLeft/></button>
          <button className="next-btn" onClick={nextPerson}> <FaChevronCircleRight/></button>
        </div>
        <button className='btn btn-hipster' onClick={randomPerson}>
          suprise Me
        </button>
      </article>
    </main>
  );
};
export default App;
