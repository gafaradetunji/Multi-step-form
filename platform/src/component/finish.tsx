
import React, { useState } from "react";
import {  CommonProps, FinishUpProps } from "../types";
import CustomButton from "./button";
import ThankYou from "./thankyou";

const plans: FinishUpProps[] = [
    {
        id: 1,
        name: 'Online service',
        price: 1,
    },
    {
        id: 2,
        name: 'Larger storage',
        price: 2,
    },
]


const FinishUp: React.FC<CommonProps> = ({ activeComp, setActiveComp }) => {
    const [confirmationClicked, setConfirmationClicked] = useState(false);
    const handleConfirmClick = () => {
        if (activeComp === 4) {
          setConfirmationClicked(true);
        }
      };
    return (
        <React.Fragment>
            { confirmationClicked ? <ThankYou/> : 
            <main className="main-component">
                <h1 className="text-2xl mb-2 text-marine-blue font-bold text-[#0000ff]">Finishing up</h1>
                <p className='text-[#c3c3c3] mb-3'>Double-check everything looks OK before confirming.</p>
                <div className="bg-[#F5FBFF] px-2 py-3 rounded-md">
                    <div className="py-5 border-b-[1px] mb-2">
                        <p className="text-marine-blue font-medium">Arcade(Monthly)</p>
                        <div className="flex items-center justify-between">
                            <CustomButton className="text-cool-gray underline" onClick={() => setActiveComp(2)}>Change</CustomButton>
                            <p className="font-medium text-marine-blue">$9/mo</p>
                        </div>
                    </div>
                    <div>
                        {plans.map(plan => (
                            <div key={plan.id}
                            className={`flex gap-3 px-3 items-center mb-3 justify-between`}
                            >
                                <div>
                                    <p className="text-cool-gray">{plan.name}</p>
                                </div>
                                <p className="text-marine-blue text-[14px]">
                                    +${plan.price}/mo
                                </p>
                            </div>
                        ))}
                        <CustomButton className='right-button md:bottom-[80px] md:right-[250px]' onClick={handleConfirmClick}>Confirm</CustomButton>
                        <CustomButton type="submit" className='left-button md:bottom-[80px] md:left-[550px]' onClick={() => setActiveComp(3)}>Go Back</CustomButton>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2 px-3 py-3">
                    <p className="text-cool-gray text-[14px] font-medium">Total(per Month)</p>
                    <p className="text-purpish-blue">+$12/mo</p>
                </div>
            </main>
        }
        </React.Fragment>
    );
}
 
export default FinishUp;
