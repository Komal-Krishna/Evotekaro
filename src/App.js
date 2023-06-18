import React, { useState } from "react";
import { Login }  from "./Components/Login"; 
import {Forgot} from "./Components/Forgot";
import {First} from "./Components/First"
import {Dashboard} from "./Components/Dashboard"
import { Add } from "./Components/Add";
import Conduct from "./Components/Conduct";
import  {Past}  from "./Components/Past";
import { Vote } from "./Components/Vote";
import {Faq} from "./Components/Faq"
import { User } from "./Components/User";
import './App.css';
import { Voting } from "./Components/Voting";
import { U } from "./Components/u";


function App() {
  const [currentForm, setCurrrentForm] = useState("First");

  const [electionId,setElectionId] = useState("")


  const toggleForm = (forName) => {
    setCurrrentForm(forName);
  }

  if (currentForm === "First") {
    return <First onFormSwitch={toggleForm}/>;
  }
  else if (currentForm === "login") {
    return <Login  onFormSwitch={toggleForm} />;

  }
  else if (currentForm === "forget") {
    return <Forgot onFormSwitch={toggleForm} />;
  }
  else if (currentForm === "Dashboard") {
    return <Dashboard onFormSwitch={toggleForm} setElectionId={setElectionId} />;
  }
  else if (currentForm === "Faq") {
    return <Faq onFormSwitch={toggleForm} />;
  }
  else if (currentForm === "Add") {
    return <Add onFormSwitch={toggleForm}  />;
  }
  else if (currentForm === "Conduct") {
    return <Conduct onFormSwitch={toggleForm} />;
  } 
  else if (currentForm === "P") {
    return <Past onFormSwitch={toggleForm}  setElectionId={setElectionId}/>;
  }
  else if (currentForm === "Vote") {
    return <Vote onFormSwitch={toggleForm} setElectionId={setElectionId}/>;
  }
  else if (currentForm === "User") {
    return <User onFormSwitch={toggleForm} ></User>
  }
  else if (currentForm === "Voting") {
    return <Voting onFormSwitch={toggleForm} electionId={electionId}></Voting>
  }
  else if (currentForm === "U") {
    return <U onFormSwitch={toggleForm}></U>
  }
}



export default App;
