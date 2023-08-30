/**
 * @desc The personalInfo component is a component that renders a form and handles form Validation using Formik and Yup
 * @param {object} initialValues - The initial values of the form
 * @inputfield from the Formik module which is used to render the input field
 */

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextInput from './input';
import CustomButton from './button';
import '../styles/App.css'
import { CommonProps } from '../types';
// import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    number: Yup.number().required('Phone number is required'),
});

const PersonalInfo: React.FC<CommonProps> = ({ activeComp, setActiveComp }) => {
    const initialValues = {
        name: '',
        email: '',
        number: '',
    };
    const handleSubmit = () => {
        if (activeComp === 1) {
            setActiveComp(2);
        }
    }
    return (
        <React.Fragment>
            <main className='main-component w-[90%] h-[400px]'>
                <h1 className="text-2xl mb-2 text-marine-blue font-bold text-[#0000ff]">Personal Info</h1>
                <p className='text-[#c3c3c3] mb-3'>Please provide your name, email address, and phone number.</p>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form>
                        <Field component={TextInput} label="Name" name="name" type="text" placeholder='e.g Stephen King' />
                        <Field component={TextInput} label="Email" name="email" type="email" placeholder='e.g stephenking@lorem.com' />
                        <Field component={TextInput} label="Phone Number" name="number" type="number" placeholder='e.g +1 234 567 890' />
                        <CustomButton type="submit"
                          className='bg-marine-blue hover:bg-white hover:text-cool-gray font-medium text-white absolute right-0 md:bottom-[80px] md:right-[250px] bottom-[-10rem] rounded-md'
                          >Next Step</CustomButton>
                    </Form>
                </Formik>
            </main>
        </React.Fragment>
    );
}
 
export default PersonalInfo;