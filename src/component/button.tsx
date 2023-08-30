/**
 * A custom button component that accepts children and className
 * @fileoverview button component
 * @param {React.ReactNode} children - The button children
 * @param {string} className - The optional button class name
 */

import React from 'react';
import { CustomButtonProps } from '../types';
const CustomButton: React.FC<CustomButtonProps> = ({ children, className, type, onClick }) => {
    return (
        <button className={`px-3 py-2 ${className}`} type={type} onClick={onClick}>{children}</button>
    );
}
 
export default CustomButton;
