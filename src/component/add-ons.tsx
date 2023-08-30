/**
 * @fileoverview add-ons component
 * @desc The add-ons component is a component that renders a list of add-ons
 * @func handleActive: sets the active number in an array
 * @array of objects: AddOns
 * @param { id } - The id of each object in the tab
 */

import React, { useState } from "react";
import { AddOnsProp, CommonProps } from "../types";
import CustomButton from "./button";
import checkmark from '../assets/images/icon-checkmark.svg'

const plans: AddOnsProp[] = [
    {
        id: 1,
        name: 'Online service',
        desc: 'Access to multiple games',
        price: 1,
    },
    {
        id: 2,
        name: 'Larger storage',
        desc: 'Extra 1TB of cloud storage',
        price: 2,
    },
    {
        id: 3,
        name: 'customizable profile',
        desc: 'Custom theme on your profile',
        price: 2,
    },
]


const AddOns: React.FC<CommonProps> = ({ activeComp, setActiveComp }) => {
    const [ active, setActive ] = useState<number[]>([])
    const handleActive = (id: number) => {
        if (active.includes(id)) {
            setActive(active.filter(item => item !== id));
        } else {
            setActive([...active, id]);
        }
    };
    const handleClick = () => {
        if (active.length >= 1 && activeComp === 3) {
            setActiveComp(4);
        }
    }
    return (
        <React.Fragment>
            <main className="main-component">
                <h1 className="text-2xl mb-2 text-marine-blue font-bold text-[#0000ff]">Pick add-ons</h1>
                <p className='text-[#c3c3c3] mb-3'>Add-ons help enhance your gaming experience.</p>
                <div>
                    { plans.map(plan => (
                        <div key={plan.id}
                          onClick={() => handleActive(plan.id)} 
                          className={`${ active.includes(plan.id) ? 'outline outline-1 outline-purpish-blue bg-[#F5FBFF]' : '' } 
                          flex gap-3 px-3 border-[1px] h-[70px] items-center mb-3 rounded-md cursor-pointer`}
                        >
                            <input 
                              type="checkbox"
                              checked={active.includes(plan.id)} 
                              className={`w-[20px] h-[20px] cursor-pointer appearance-none border-[1px] ${ active.includes(plan.id) ? 'checked:bg-purpish-blue' : ''}`}/>
                              {active.includes(plan.id) && (
                                <img src={checkmark} className="text-black absolute ml-1"/>                              
                             )}
                            <div className="flex justify-between w-full">
                                <div>
                                    <p className="text-marine-blue font-medium">{plan.name}</p>
                                    <p className="text-[#c3c3c3] text-[14px]">{plan.desc}</p>
                                </div>
                                <p className="text-purpish-blue text-left text-[0.9rem] text-justify">${plan.price}/mo</p>
                            </div>
                            {/* <p className="text-purpish-blue text-[14px]">
                                {activeToggle === 'Yearly' ? `$${plan.price * 12}/yr` : `$${plan.price}/mo`}
                            </p> */}
                        </div>
                    ))}
                    <CustomButton className='right-button md:bottom-[80px] md:right-[250px]' onClick={handleClick}>Next Step</CustomButton>
                    <CustomButton type="submit" className='left-button md:bottom-[80px] md:left-[550px]' onClick={() => setActiveComp(2)}>Go Back</CustomButton>
                </div>
            </main>
        </React.Fragment>
    );
}
 
export default AddOns;
