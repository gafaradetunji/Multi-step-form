/**
 * Accepts list of items as children
 * @param {React.ReactNode} children - The list items
 * @param {string} className - The list class name
 * @returns {JSX.Element} - The list of items
 */

import React from 'react';
import { CustomListProps } from "../types";
const CustomList: React.FC<CustomListProps> = ({ children, className }) => {
    return (
        <ul className={`${className}`}>{children}</ul>
    );
}
 
export default CustomList;
