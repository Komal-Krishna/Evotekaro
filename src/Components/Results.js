import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "./CSS/Voting.css";


export const Results = ({electionId ,onFormSwitch,eId}) => {

    const [v,setv] = useState([])
    // eslint-disable-next-line
    const [s,sets] = useState(eId)
    
useEffect(() => {
    fetch(`http://127.0.0.1:8000/votes/${parseInt(s)}`, {
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
    setv(data)


  })
     .catch(error => {
         console.log("Error", error);
        });
    },[])


    return(
        <div>
        <div className="a">
          <Sidebar change={onFormSwitch}></Sidebar>
        </div>
        <div className="candidates">
            <div className="election-name">
                {electionId} - Results
            </div>
            <div className="Voting">
            {
            v.map((i) => {
                return(
                    <div className="candid" style={{border: '2px black'}}>
                        <div className="name" >
                            {i.candidateName} has secured {i.vote_count} votes.
                        </div>
                    </div>
                );
            })
            }
        </div>
        </div>
        </div>
    );
}