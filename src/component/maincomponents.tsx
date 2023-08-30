/**
 * @fileoverview main component to render the components
 * This Component do not only render the components but also handles the state of the inner components and makes sure that the right component is rendered
 */

import { useState } from 'react';
import MobilesideMenu from './sideMenu';
import { Tabs } from '../data/tabData';

const RenderComponents = () => {
    const [ active, setActive ] = useState(1);
    const activeTabInfo = Tabs.find((tab) => tab.id === active);
    return (
        <main className='bg-white md:px-2 md:py-2 md:h-[600px] md:mx-auto md:w-[900px] h-screen md:flex md:gap-4'>
            <MobilesideMenu active={active} setActive={setActive}/>
            <div className='md:flex-initial md:w-[600px]'>
            {activeTabInfo && <activeTabInfo.component activeComp={active} setActiveComp={setActive}/>}
            </div>
        </main>
    );
}
 
export default RenderComponents;
