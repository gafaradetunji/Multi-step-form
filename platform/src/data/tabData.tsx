// Desc: Left side bar data
/**
* @array of objects: Tab
* @param { id } - The id of each object in the tab
* @param { name } - The name of each object in the tab
* @param {ReactNode} Component - The component to be rendered 
*/
import { tabData } from "../types";
import PersonalInfo from "../component/personal-info";
import SelectPlan from "../component/selectPlan";
import AddOns from "../component/add-ons";
import FinishUp from "../component/finish";

export const Tabs: tabData[] = [
    {
        id: 1,
        name: 'YOUR INFO',
        step: 'Step 1',
        component: PersonalInfo,
    },
    {
        id: 2,
        name: 'SELECT PLAN',
        step: 'Step 2',
        component: SelectPlan,
    },
    {
        id: 3,
        name: 'ADD-ONS',
        step: 'Step 3',
        component: AddOns,
    },
    {
        id: 4,
        name: 'SUMMARY',
        step: 'Step 4',
        component: FinishUp,
    },
]
