/**
 * @fileoverview select plan component
 * @desc The select plan component is a component that renders a list of plans be it Yearly or Monthly
 * @func handleActive: sets the active number
 * @array of objects: Plans
 */
import React, { useState } from "react";
import { CommonProps, Plans } from "../types";
import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'
import CustomButton from "./button";

const plans: Plans[] = [
    {
        id: 1,
        icon: arcadeIcon,
        name: 'Arcade',
        price: 9,
    },
    {
        id: 2,
        icon: advancedIcon,
        name: 'advanced',
        price: 12,
    },
    {
        id: 3,
        icon: proIcon,
        name: 'Pro',
        price: 15,
    },
]


const SelectPlan: React.FC<CommonProps> = ({ activeComp, setActiveComp }) => {
    const [ active, setActive ] = useState< number | null >(null)
    const [activeToggle, setActiveToggle] = useState<'Monthly' | 'Yearly'>('Monthly');
    const handleActive = (id: number) => {
        console.log(id)
        setActive(id === active ? null : id)
    }
    const handleClick = () => {
        if (active !== null && activeComp === 2) {
            setActiveComp(3);
        }
    }
    return (
        <React.Fragment>
            <main className="main-component">
                <h1 className="text-2xl mb-2 text-marine-blue font-bold text-[#0000ff]">Select your plan</h1>
                <p className='text-[#c3c3c3] mb-3'>You have the option of monthly or yearly billing.</p>
                <div className="md:mt-8">
                    <div className="md:flex md:h-full">
                    { plans.map(plan => (
                        <div key={plan.id}
                          onClick={() => handleActive(plan.id)} 
                          className={`${ active === plan.id ? 'outline outline-1 outline-purpish-blue bg-[#F5FBFF]' : '' } 
                            md:h-[12.5rem] md:flex-col md:w-[11rem] md:me-3 md:items-start md:py-4 md:pl-4 md:justify-between flex gap-3 px-3 border-[1px] h-[70px] items-center mb-3 rounded-md cursor-pointer`}
                        >
                            <img src={`${plan.icon}`} alt={`$Plan ${plan.name}`}/>
                            <div className="flex flex-col">
                                <span className="text-marine-blue font-semibold text-[16px]">{plan.name}</span>
                                <span className="text-[14px] text-[#c4c4c4]">
                                    {activeToggle === 'Yearly' ? '$' + (plan.price * 12) : '$' + plan.price}/
                                    {activeToggle === 'Yearly' ? 'yr' : 'mo'}
                                </span>
                                {activeToggle === 'Yearly' && <span className="text-marine-blue text-[12px]">2 months free</span>}
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="flex items-center justify-center mt-5">
                        <span className={`pr-2 ${activeToggle === 'Monthly' ? 'text-marine-blue font-bold' : 'text-cool-gray font-medium'}`}>Monthly</span>
                        <button
                            onClick={() => setActiveToggle(activeToggle === 'Monthly' ? 'Yearly' : 'Monthly')}
                            className={`relative rounded-full w-[50px] h-6 transition-colors duration-200 ${
                                activeToggle === 'Monthly' ? 'bg-purpish-blue' : 'bg-purpish-blue'
                            }`}
                        >
                            <span
                                className={`absolute top-[2px] left-2 w-4 h-4 rounded-full transition-transform duration-200 ${
                                    activeToggle === 'Monthly' ? 'transform translate-x-0' : 'transform translate-x-full'
                                } ${
                                    activeToggle === 'Monthly' ? 'bg-white' : 'bg-white'
                                }`}
                            />
                        </button>
                        <span className={`pl-2 ${activeToggle === 'Yearly' ? 'text-marine-blue font-bold' : 'text-cool-gray font-medium'}`}>Yearly</span>
                    </div>
                    <CustomButton className='right-button md:bottom-[80px] md:right-[250px]' onClick={handleClick}>Next Step</CustomButton>
                    <CustomButton type="submit" className='left-button md:bottom-[80px] md:left-[550px]' onClick={() => setActiveComp(1)}>Go Back</CustomButton>
                </div>
            </main>
        </React.Fragment>
    );
} 
export default SelectPlan;
