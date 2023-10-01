import React,{useState,useEffect} from "react";
import Sidebar from './Sidebar';
import "./CSS/Vote.css";
import CreateElection from "./CreateElection";
import jwt_decode from "jwt-decode";

 
export const Vote = ({setElectionId,seteId}) => {
  const [d,setd] = useState([])
   
  const currentDateTime = new Date().toISOString();
   const decoded = jwt_decode(localStorage.getItem('SavedToken'));

  useEffect(() => {
     fetch('http://localhost:8000/election', {
     method: 'GET',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': localStorage.getItem('SavedToken')
     }})
  .then(response => {
      if (!response.ok) {
          throw new Error('request failed');
      }
      return response.json();
  })
      .then(data => {
        // react componants here
        console.log(data)
        setd(data);

      })
      .catch(error => {
          console.log("Error", error);
      });
  },[])

    return(
      <div className='bg-image'>
         <div className='side'>
         <Sidebar></Sidebar>
        </div>
         <div className="view-section">
            <p className="sumo-text"><center>E VOTEKARO</center></p>
            
            <div className="cards-list">
            
            {
         d.map((item) => 
         {if ((currentDateTime > item.startTime) && (currentDateTime < item.endTime)){
          {if ((item.batch === "all") & (item.year === "all") & (item.branch === "all")  )
        {
           return <CreateElection title={item.name} rule={item.rules} setElectionId={setElectionId} start={item.startTime} end={item.endTime}seteId={seteId} id={item.id}></CreateElection>
        }
        else if ((item.batch === "all") & (item.year === "all") & (item.branch === decoded.branch)  )
        {
           return <CreateElection title={item.name} rule={item.rules} setElectionId={setElectionId} start={item.startTime} end={item.endTime}seteId={seteId} id={item.id}></CreateElection>
        }
        else if ((item.batch === "all") & (item.year === decoded.year) & (item.branch === "all")  )
        {
           return <CreateElection title={item.name} rule={item.rules} setElectionId={setElectionId} start={item.startTime} end={item.endTime}seteId={seteId} id={item.id}></CreateElection>
        }
        else if ((item.batch === decoded.batch) & (item.year === "all") & (item.branch === "all")  )
        {
           return <CreateElection title={item.name} rule={item.rules} setElectionId={setElectionId} start={item.startTime} end={item.endTime}seteId={seteId} id={item.id}></CreateElection>
        }
        else if ((item.batch === decoded.batch) & (item.year === decoded.year) & (item.branch === "all")  )
        {
           return <CreateElection title={item.name} rule={item.rules} setElectionId={setElectionId} start={item.startTime} end={item.endTime}seteId={seteId} id={item.id}></CreateElection>
        }
        else if ((item.batch === "all") & (item.year === decoded.year) & (item.branch === decoded.branch)  )
        {
           return <CreateElection title={item.name} rule={item.rules} setElectionId={setElectionId} start={item.startTime} end={item.endTime}seteId={seteId} id={item.id}></CreateElection>
        }
        else if ((item.batch === decoded.batch) & (item.year === "all") & (item.branch === decoded.branch)  )
        {
           return <CreateElection title={item.name} rule={item.rules} setElectionId={setElectionId} start={item.startTime} end={item.endTime}seteId={seteId} id={item.id}></CreateElection>
        }
        else if ((item.batch === decoded.branch) & (item.year === decoded.year) & (item.branch === decoded.branch)  )
        {
           return <CreateElection title={item.name} rule={item.rules} setElectionId={setElectionId} start={item.startTime} end={item.endTime}seteId={seteId} id={item.id}></CreateElection>
        }
     }
        }
          })
        }
            
            </div>
            
           </div>
         </div>
   )
}