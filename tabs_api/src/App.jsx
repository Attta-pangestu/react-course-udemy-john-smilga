import {useState, useEffect} from 'react';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  
  const fetchJob = async () => {
    console.log("Calling API");
    setIsLoading(true);
    const response = await fetch(url);
    const newJobs = await response.json();
    console.log("New Jobs : ", newJobs);
    
    setJobs(newJobs);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchJob();
  },[])


  if(isLoading) {
    return (
      <section className='jobs-center'>
        <div className="loading"></div>
      </section>
    )
  }

  console.log("Current Item : ", currentItem);
  
  return (
    <section className='jobs-center'>
        <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
        <JobInfo jobs={jobs} currentItem={currentItem}/>
    </section>
  )
};
export default App;
