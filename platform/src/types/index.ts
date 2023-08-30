import React from "react";
import { InputHTMLAttributes } from "react";


export interface CommonProps {
    activeComp: number;
    setActiveComp: (active: number) => void;
}

export interface tabData {
    id: number,
    name: string,
    step: string,
    component: React.FC<CommonProps>,
}
export interface CustomListProps {
    children: React.ReactNode,
    className?: string,
}
export interface CustomInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'form'> {
    label: string;
    error?: string;
    className?: string;
}
export interface CustomButtonProps {
    children: React.ReactNode,
    className?: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
}
export interface Plans {
    id: number,
    name: string,
    icon: string,
    price: number
}
export interface AddOnsProp {
    id: number,
    name: string,
    desc: string,
    price: number
}
export interface FinishUpProps {
    id: number,
    name: string,
    price: number
}

export interface SideMenuProps {
    active: number,
    setActive: (num: number) => void,
}