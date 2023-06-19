import React from "react";
import Side from "./Side";
import "./CSS/user.css"
import { useState } from "react";
import { useEffect } from "react";



export const User= ({onFormSwitch}) => {
   const [a,seta] = useState('')
   const [c,setc] = useState('')
   const [e,sete] = useState("")
   const [v,setv] = useState("")


  useEffect(() => {

  fetch('http://localhost:8000/user', {
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
            seta(data);
            console.log(data)

          })
          .catch(error => {
              console.log("Error", error);
          });

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
               setc(data);
               console.log(data)
               
   
             })
             .catch(error => {
                 console.log("Error", error);
             });


      
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
                 sete(data);
     
               })
               .catch(error => {
                   console.log("Error", error);
               });


               fetch('http://localhost:8000/votes', {
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
                 setv(data);
     
               })
               .catch(error => {
                   console.log("Error", error);
               });
              },[])


  
        

    return(
      <div className='A'>
         <div className='side'>
         <Side change={onFormSwitch} ></Side>
        </div>
        <div className="cont">
         <p className="he"><center>E VOTEKARO {'('}Admin{")"} </center></p>
       
        <div className="c">
        <div className="t"><p style={{fontStyle:"Josefin Sans",}}><center>Total Number of voters</center></p></div>
            <div className="ti"><>{a.length}</></div> 
        </div>
        <div className="c">
        <div className="t"><p><center>Candidates</center></p></div>
            <div className="ti"><>{c.length}</></div> 
        </div>
        <div className="c">
            <div className="t"><p><center>Number of votes</center></p></div>
            <div className="ti"><>{v.length}</></div> 
        </div>
        <div className="c">
            <div className="t"><p><center> Number of election</center></p></div>
            <div className="ti"><>{e.length}</></div> 
        </div>
      </div>     
      </div>
   )
}