import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CreateElection from "./CreateElection";
import "./CSS/Dashboard.css";
import Sidebar from './Sidebar';
import jwt_decode from "jwt-decode";


 
export const Dashboard = ({onFormSwitch,setElectionId,seteId}) => {

   const [d,setd] = useState([])
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
      console.log(data)
      console.log(decoded)

    })
       .catch(error => {
           console.log("Error", error);
       });
   },[])

 


    return(
      <div className='A'>
         <div className='side'>
         <Sidebar change={onFormSwitch} ></Sidebar>
        </div>
         <div className="v">
            <p className="hea"><center>E VOTEKARO</center></p>
            
            <div className="cards">
           
            {
            d.map((item) => 
                  {if ((item.batch === "all") & (item.year === "all") & (item.branch === "all")  )
                  {
                     return <CreateElection title={item.name}  rule={item.rules}  onFormSwitch={onFormSwitch} setElectionId={setElectionId} start={item.startTime} end={item.endTime} seteId={seteId} id={item.id}></CreateElection>
                  }
                  else if ((item.batch === "all") & (item.year === "all") & (item.branch === decoded.branch)  )
                  {
                     return <CreateElection title={item.name} rule={item.rules}  onFormSwitch={onFormSwitch} setElectionId={setElectionId} start={item.startTime} end={item.endTime}seteId={seteId} id={item.id}></CreateElection>
                  }
                  else if ((item.batch === "all") & (item.year === decoded.year) & (item.branch === "all")  )
                  {
                     return <CreateElection title={item.name} rule={item.rules}  onFormSwitch={onFormSwitch} setElectionId={setElectionId} start={item.startTime} end={item.endTime}seteId={seteId} id={item.id}></CreateElection>
                  }
                  else if ((item.batch === decoded.batch) & (item.year === "all") & (item.branch === "all")  )
                  {
                     return <CreateElection title={item.name} rule={item.rules}  onFormSwitch={onFormSwitch} setElectionId={setElectionId} start={item.startTime} end={item.endTime}seteId={seteId} id={item.id}></CreateElection>
                  }
                  else if ((item.batch === decoded.batch) & (item.year === decoded.year) & (item.branch === "all")  )
                  {
                     return <CreateElection title={item.name} rule={item.rules}  onFormSwitch={onFormSwitch} setElectionId={setElectionId} start={item.startTime} end={item.endTime}seteId={seteId} id={item.id}></CreateElection>
                  }
                  else if ((item.batch === "all") & (item.year === decoded.year) & (item.branch === decoded.branch)  )
                  {
                     return <CreateElection title={item.name} rule={item.rules}  onFormSwitch={onFormSwitch} setElectionId={setElectionId} start={item.startTime} end={item.endTime}seteId={seteId} id={item.id}></CreateElection>
                  }
                  else if ((item.batch === decoded.batch) & (item.year === "all") & (item.branch === decoded.branch)  )
                  {
                     return <CreateElection title={item.name} rule={item.rules}  onFormSwitch={onFormSwitch} setElectionId={setElectionId} start={item.startTime} end={item.endTime}seteId={seteId} id={item.id}></CreateElection>
                  }
                  else if ((item.batch === decoded.branch) & (item.year === decoded.year) & (item.branch === decoded.branch)  )
                  {
                     return <CreateElection title={item.name} rule={item.rules}  onFormSwitch={onFormSwitch} setElectionId={setElectionId} start={item.startTime} end={item.endTime}seteId={seteId} id={item.id}></CreateElection>
                  }
               }
               )
            }
            
            
            </div>
            
           
         </div>
         <div className="about">
            <p className="ab" >About :</p>
            
            <p style={{color: "white",}}>Welcome to Evotekaro - your one-stop solution for online voting!<br></br><br></br>
At Evotekaro, we believe in the power of democracy and the importance of giving every individual a voice. 
With the rapid advancements in technology, we have developed a user-friendly web application that revolutionizes the way we vote. 
Say goodbye to long queues and complicated paper ballots. 
With Evotekaro, you can participate in elections and make your voice heard from the comfort of your own home, office, or anywhere with an internet connection.
<br></br><br></br>
Evotekaro - Voting made simple, secure, and accessible.
</p>
         </div>
      </div>     
   )
}

