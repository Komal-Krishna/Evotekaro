import React from 'react';


import { ReactComponent as Home } from './CSS/images/home.svg';
import { ReactComponent as Vote } from './CSS/images/ongoing.svg';
import { ReactComponent as Q } from './CSS/images/faq.svg';
import { ReactComponent as Logout } from './CSS/images/logout.svg'

 function Side({change}) {
  return (
       <ul className='sidebarlist'>
       <li className='row' onClick={() => change('User')}>
           {""}
           <div className='icon'><Home/></div> {""}
           <div className='title'>Home</div>
       </li>
       
       <li className='row' onClick={() => change('')} >
           {""}
           <div className='icon' ><Vote/></div> {""}
           <div className='title'>User</div>
       </li>

       <li className='row' onClick={() => change('')}>
           {""}
           <div className='icon'><Q/></div> {""}
           <div className='title'>Conduct</div>
       </li>

       <li className='row' onClick={() => change('First')}>
           {""}
           <div className='icon'><Logout/></div> {""}
           <div className='title'>Logout</div>
       </li>            
       </ul>
);
}

export default Side;
