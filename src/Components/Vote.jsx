import React,{useState,useEffect} from "react";
import Sidebar from './Sidebar';
import "./CSS/Vote.css";
import CreateElection from "./CreateElection";
 
export const Vote = ({onFormSwitch,setElectionId}) => {
  const [d,setd] = useState([])
   
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
      <div className="m">
        <div className="a">
          <Sidebar change={onFormSwitch}></Sidebar>
        </div>
        <div className="b">
          <div>
          <p className="heading"><center>E VOTEKARO</center></p>
            <div className="cards">
            {
            d.map((item) => (<CreateElection title={item.name} rule={item.rules} id={item.id} onFormSwitch={onFormSwitch} setElectionId={setElectionId} ></CreateElection>))
            }
            </div>
          </div>
          
        </div>
      </div>
   )
}