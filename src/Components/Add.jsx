import React from "react"
import "./CSS/Add.css";
import { ReactComponent as Home } from './CSS/images/home.svg';
import { ReactComponent as Past } from './CSS/images/past.svg';
import { ReactComponent as Vote } from './CSS/images/ongoing.svg';
import { ReactComponent as Q } from './CSS/images/faq.svg';
import { ReactComponent as Logout } from './CSS/images/logout.svg'


export const Add = ({onFormSwitch}) => {

    

    

    return(
        <div className='App'>
         <div className='sidebar'>
            <ul className='sidebarlist'>
            <li className='row' onClick={() => onFormSwitch('Dashboard')}>
                {""}
                <div className='icon'><Home/></div> {""}
                <div className='title'>Home</div>
            </li>
            
            <li className='row'>
                {""}
                <div className='icon' onClick={() => onFormSwitch('')}><Past/></div> {""}
                <div className='title'>Past</div>
            </li>

            <li className='row'>
                {""}
                <div className='icon' onClick={() => onFormSwitch('Add')}><Vote/></div> {""}
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
            </ul>
         </div>
         <div className="add"> 
         <center>
            <form>
                <input type="text" name="title" placeholder="Election Name"  ></input>
                <input type="text" name="rules" placeholder="Rules" ></input>
            </form>
            <button  >ADD</button>
         </center>
         </div>
        </div>
    )
}