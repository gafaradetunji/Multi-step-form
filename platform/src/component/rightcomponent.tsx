import React from "react";
import SelectPlan from "./selectPlan";
import AddOns from "./add-ons"; 
import { CommonProps } from "../types";

const ParentComponent: React.FC<CommonProps> = ({ activeComp, setActiveComp}) => {

    return (
        <div>
            <SelectPlan activeComp={activeComp} setActiveComp={setActiveComp}/>
            <AddOns activeComp={activeComp} setActiveComp={setActiveComp}/>
        </div>
    );
};

export default ParentComponent;
