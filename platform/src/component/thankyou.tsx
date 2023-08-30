/**
 * @fileoverview thank you component
 * @desc The thank you component is a component that renders a thank you message
 * It marks the end of the onboarding process
 */

import React from 'react';
import Thanks from '../assets/images/icon-thank-you.svg'
const ThankYou = () => {
    return (
        <React.Fragment>
            <main className='main-component h-[400px] flex flex-col items-center justify-center'>
                <img src={Thanks} alt='Thank you' className='mb-4'/>
                <h1 className="text-2xl mb-2 text-marine-blue font-bold text-[#0000ff]">Thank you</h1>
                <p className='text-[#c3c3c3] text-[15px] mb-3'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </main>
        </React.Fragment>
    );
}
 
export default ThankYou;