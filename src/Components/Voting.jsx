import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

export const Voting = ({electionId ,onFormSwitch}) => {

    const [k,setk] = useState([])
    const [manifesto,setManifesto] = useState("")

    useEffect(() => {
        fetch('http://localhost:8000/candidates', {
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
           setk(data)
           

         })
         .catch(error => {
             console.log("Error", error);
         });
     },[])



    {
        k.map((i) => {
            if (i.electionId === electionId){
                setManifesto(i.manisfesto)
            }
        })
    }


    return(
        <div className="m">
        <div className="a">
          <Sidebar change={onFormSwitch}></Sidebar>
        </div>
        <div>
            <> this election this election this election This election id is {electionId} and manisfesto is {manifesto}</>
        </div>
        </div>
    );
}