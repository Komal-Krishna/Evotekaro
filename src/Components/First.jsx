import React from 'react';
import "./CSS/First.css"

export const First = (props) => {
    return(
            <div className='bd'>
                    <button className='btn' onClick={() => props.onFormSwitch('login')}>Sign up</button>
                    <div className='contact'>Contact Us</div>
                    <div className='home'>Home</div>
                    <div className='Heading'>
                    <h1>E VOTEKARO</h1>
                    </div>
            </div>
        )
}

