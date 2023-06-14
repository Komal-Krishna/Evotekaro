import React from "react";
import "./CSS/Conduct.css"

import { ReactComponent as Home } from './CSS/images/home.svg';
import { ReactComponent as Past } from './CSS/images/past.svg';
import { ReactComponent as Vote } from './CSS/images/ongoing.svg';
import { ReactComponent as Q } from './CSS/images/faq.svg';
import { ReactComponent as Logout } from './CSS/images/logout.svg'

function Conduct({onFormSwitch,el}) {
  return (
      <div className='App'>
         <div className='sidebar'>
            <ul className='sidebarlist'>
            <li className='row' onClick={() => onFormSwitch('Dashboard')}>
                {""}
                <div className='icon'><Home/></div> {""}
                <div className='title'>Home</div>
            </li>
            
            <li className='row' onClick={() => onFormSwitch('')}>
                {""}
                <div className='icon' ><Past/></div> {""}
                <div className='title'>Past</div>
            </li>

            <li className='row' onClick={() => onFormSwitch('Conduct')}>
                {""}
                <div className='icon' ><Vote/></div> {""}
                <div className='title'>Vote</div>
            </li>

            <li className='row' onClick={() => onFormSwitch('Faq')}>
                {""}
                <div className='icon'><Q/></div> {""}
                <div className='title'>FAQ</div>
            </li>

            <li className='row' onClick={() => onFormSwitch('First')}>
                {""}
                <div className='icon'><Logout/></div> {""}
                <div className='title'>Logout</div>
            </li>

            <li className='row' onClick={() => console.log(el)}>
                {""}
                <div className='icon'><Logout/></div> {""}
                <div className='title'>Logout</div>
            </li>

            
            </ul>
        </div>

        <div className="conduct">
          <h>Name of the election : </h>
          <input type="text" size="40" />
        <br />
        <br />
        <br />
        <br/>
          <h>Year : </h>
          <input type="text" size="20" />
          <br/>
        <h>Branch : </h>
        <input type="text" />
        <br/>
        <h>Batch : </h>
        <input type="text" />
        <br />
        <br />
        <br />
        <h>Add Candidates: <br />
        <br />
        </h>
        <input type="text" />
        <br />
        <br />
        <input type="text" />
        <br />
        <br />
        <input type="text" />
        <br />
        <br />
        <br />
        <button name="Add" type="submit">Add More</button>
        <br />
        <br />
        <br />
        <h>Rules and regulations:</h>
        <br />
        <br />
        <textarea name="rules" id="rules" cols="100" rows="10"></textarea>
        <br />
        <br />
        <br />
        <button name="New election" type="submit">
          Add new election
        </button>
        <button id="b2" name="submit1" type="submit">
          Submit
        </button>
      </div>
    </div>
  )
  }


export default Conduct;