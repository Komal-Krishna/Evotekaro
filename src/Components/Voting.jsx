import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "./CSS/Voting.css";

export const Voting = ({electionId ,onFormSwitch}) => {

    const [k,setk] = useState([])
    const [can,setcan] = useState([])
    const [vote,setVote] = useState(false)

    const submitHandler = () => {
        setVote(true);
    }

   
   
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
         setk(data);

       })
       .catch(error => {
           console.log("Error", error);
       });

       

   },[])

     
   useEffect(() => {
    {
        k.map((i) => {
            if (i.name === electionId){
                setcan(i.candidates)
            }
        })
        }
   })

   useEffect(() => {
    const pastvote = JSON.parse(localStorage.getItem("vote", vote))
    setVote(pastvote)
   },[])

   useEffect(() => {
    localStorage.setItem("vote", vote)
   },[vote])

   
    return(
        <>
        <div className="a">
          <Sidebar change={onFormSwitch}></Sidebar>
        </div>
        <div className="candidates">
            <div className="election-name">
                {electionId}
            </div>
            <div className="Voting">
            {
            can.map((i) => {
            return(
                <div className="candid">
                    <div className="name">{i.name}
                    <button className="votebut" >{ vote ? "Voted" : "Vote"}</button>
                    </div>
                    
                </div>
            );
            })
            }
            </div>
        <div> <button className="sub" onClick={submitHandler} >Submit</button> </div>
        </div>
        </>

    );
}