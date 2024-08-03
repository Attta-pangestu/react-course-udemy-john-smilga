import {useState, useEffect} from 'react';
import JobInfo from './JobInfo';

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  
  const fetchJob = async () => {

    setIsLoading(true);
    const response = await fetch(url);
    const newJobs = await response.json();
    console.log(newJobs);
    setJobs(newJobs);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchJob();
    console.log(jobs);
  },[])

  if(isLoading) {
    return (
      <section className='jobs-center'>
        <div className="loading"></div>
      </section>
    )
  }

  
  return (
    <section className='jobs-center'>
      <JobInfo jobs={jobs} />
    </section>
  )
};
export default App;
