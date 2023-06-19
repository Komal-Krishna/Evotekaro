import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./CSS/Election.css";



function CreateElection({title,rule,onFormSwitch,setElectionId,start,end,seteId,id}) {
    let r = rule
    const currentDateTime = new Date().toISOString();

    const vote = () => {
        console.log("clicked")
        setElectionId(title);
        seteId(id);
        // eslint-disable-next-line
        {if (currentDateTime > end){
            onFormSwitch("Results")
            console.log("Past")
          }
          else if ((currentDateTime > start) && (currentDateTime < end)){
            onFormSwitch("Voting")
            console.log("Ongoing")
          }
    }}


    
    return(
        <div className="com" onClick={vote}>
            <div className="tit"><p >{title}</p></div>
            <Popup trigger={<button className="but"> Rules</button>} position="botttom center" >
            {r}
            </Popup>
        </div>
    );
}

export default CreateElection;