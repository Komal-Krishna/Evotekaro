import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./CSS/Election.css";


function CreateElection({title,rule,id,onFormSwitch,setElectionId}) {
    let r = rule

    const vote = () => {
        console.log("clicked")
        setElectionId(id)
        onFormSwitch("Voting")
    }
    
    return(
        <div className="com" onClick={vote}>
            <div className="tit"><p >{title}</p></div>
            <Popup trigger={<button className="but"> Rules</button>} position="right center" >
            {r}
            </Popup>
        </div>
    );
}

export default CreateElection;