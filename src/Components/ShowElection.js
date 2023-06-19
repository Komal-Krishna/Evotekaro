import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./CSS/Election.css";



function ShowElection({title,batch,branch,year}) {
        
    return(
        <div className="com" >
            <div className="tit"><p >{title}</p></div>
            <Popup trigger={<button className="but"><b>REQ</b></button>} position="bottom center" >
            Year: {year}<br></br>
            Branch: {branch}<br></br>
            Batch: {batch}<br></br>
            </Popup>
        </div>
    );
}

export default ShowElection;