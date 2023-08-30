/**
 * @fileoverview sideMenu component
 * @desc The sideMenu component is a component that renders a list of items
 * @func handleActive: sets the active number
 * @comp CustomList: renders a list of items
 * @returns {JSX.Element} - The list of items
 */
import React from 'react';
import CustomList from './listitems';
import CustomButton from './button';
import { Tabs } from '../data/tabData';
import { SideMenuProps } from '../types';

const MobileSideMenu: React.FC<SideMenuProps> = ({ active, setActive }) => {
    const handleActive = (num: number) => setActive(num)
    return (
        <main>
            <div className="bg-mobile-svg h-[170px] md:bg-desktop-svg md:h-full md:bg-no-repeat md:flex-1 md:w-[300px] md:pt-6">
               <CustomList className='h-full'>
                 <li className="text-white h-full flex items-center justify-center md:justify-start md:flex-col">
                    {Tabs.map((num) => (
                        <div
                          key={num.id}
                          onClick={() => handleActive(num.id)} 
                          className='md:flex md:w-full md:items-center md:pl-8 md:h-[60px] cursor-pointer m-2'>
                            <CustomButton  
                                className={`${ active === num.id ? 'bg-light-blue' : ''}
                                  mb-12 md:mb-0 md:me-4 border-2 px-3 py-[5px] font-bold text-marine-blue rounded-full mx-2`}>
                                <span>{num.id}</span>
                            </CustomButton>
                            <div className='flex flex-col hidden md:block md:flex'>
                                <span className='text-cool-gray text-[0.8rem]'>{num.step}</span>
                                <span className='font-semibold'>{num.name}</span>
                            </div>
                        </div>
                    )
                    )}
                 </li>
               </CustomList>
            </div>
        </main>
    );
}
 
export default MobileSideMenu;
