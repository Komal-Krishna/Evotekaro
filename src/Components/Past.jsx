import React from "react";
import "./CSS/Past.css"
import Sidebar from "./Sidebar";

export const Past = ({onFormSwitch}) => {
    return(
        <div className="MM">
        <div className="a">
          <Sidebar change={onFormSwitch}></Sidebar>
        </div>
        <div className="BB">
          <div className="res">No Past Results</div>
        </div>
      </div>
  
   )
}

