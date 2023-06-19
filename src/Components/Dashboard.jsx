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
            <p className="heading"><center>E VOTEKARO</center></p>
            
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
            
            <p style={{color: "white"}}>More  than 290 people are killed and over 1,100 others injured in a collision between three trains in Balasore, India crash site pictured </p>
         </div>
      </div>     
   )
}

