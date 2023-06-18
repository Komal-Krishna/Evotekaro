import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "./CSS/Voting.css";
import jwt_decode from "jwt-decode";
import axios from 'axios';

export const Results = ({electionId ,onFormSwitch}) => {

   
   
    return(
        <>
        <div className="a">
          <Sidebar change={onFormSwitch}></Sidebar>
        </div>
        <div className="candidates">
            <>Results</>
        </div>
        </>

    );
}