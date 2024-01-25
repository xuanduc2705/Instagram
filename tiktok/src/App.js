 //import { useState } from "react";

import { useState } from "react";

function App() {
  const[job,setJob] = useState('')
  const[jobs,setJobs] = useState([])
  const handleSubmit=()=>{
    if(job!==null && job!==''){
    setJobs(pre=>[...pre,job])
    setJob('')
    }
  }
  return (
    <div style={{padding:20}}>
      <input
      value={job}
      onChange={e=>setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job,index)=>(
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
