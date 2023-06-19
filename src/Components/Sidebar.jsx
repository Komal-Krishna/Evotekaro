import React from 'react';


import { ReactComponent as Home } from './CSS/images/home.svg';
import { ReactComponent as Past } from './CSS/images/past.svg';
import { ReactComponent as Vote } from './CSS/images/ongoing.svg';
import { ReactComponent as Q } from './CSS/images/faq.svg';
import { ReactComponent as Logout } from './CSS/images/logout.svg'

 function Sidebar({change}) {
  return (
       <ul className='sidebarlist'>
       <li className='row' onClick={() => change('Dashboard')}>
           {""}
           <div className='icon'><Home/></div> {""}
           <div className='title'>Home</div>
       </li>
       
       <li className='row' onClick={() => change('P')}>
           {""}
           <div className='icon' ><Past/></div> {""}
           <div className='title'>Past</div>
       </li>

       <li className='row' onClick={() => change('Vote')} >
           {""}
           <div className='icon' ><Vote/></div> {""}
           <div className='title'>Ongoing</div>
       </li>

       <li className='row' onClick={() => change('Faq')}>
           {""}
           <div className='icon'><Q/></div> {""}
           <div className='title'>FAQ</div>
       </li>

       <li className='row' onClick={() => change('First')}>
           {""}
           <div className='icon'><Logout/></div> {""}
           <div className='title'>Logout</div>
       </li>            
       </ul>
);
}

export default Sidebar;
