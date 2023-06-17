import React, {useState,useEffect} from "react";
import "./CSS/Past.css"
import Sidebar from "./Sidebar";
import CreateElection from "./CreateElection";
import moment from "moment";
import dateFormat from 'dateformat';


export const Past = ({onFormSwitch,setElectionId}) => {

  const [d,setd] = useState([])

  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth()}-${current.getDate()}`;
  const time = current.getHours()
       + ':' + current.getMinutes()
       + ":" + current.getSeconds();

  

  

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
      <div className='A'>
      <div className='side'>
      <Sidebar change={onFormSwitch} ></Sidebar>
     </div>
      <div className="v">
         <p className="head"><center>E VOTEKARO</center></p>
         
         <div className="cards">
         
         {
         d.map((item) => 
         {if (date.isBefore(moment(item.endTime).format('YYYY-MM-DD')) ){
          return <CreateElection title={item.name} rule={item.rules}  onFormSwitch={onFormSwitch} setElectionId={setElectionId} ></CreateElection>
        }
        else {
          console.log(date + moment(item.endTime).format('YYYY-MM-DD') )
        }
          })
        }
        </div>
        </div>
      </div>
  
   )
}

