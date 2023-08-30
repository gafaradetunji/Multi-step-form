/**
 * Description: input component
 * The accessible input component
 * @label - The label of the input
 * @error - The error message
 * @field - The field of the input
 * @input - The input props
 */
import React from 'react';
import { FieldProps } from 'formik';
import { CustomInputProps } from '../types';

type TextInputProps = CustomInputProps & FieldProps;

const TextInput: React.FC<TextInputProps> = ({ label, error, field, form, ...inputProps }) => {
  const { name } = field;
  const { touched, errors } = form;
  

  return (
    <div>
      <label className='block text-marine-blue text-[14px] mb-2'>{label}</label>
      <input {...inputProps}
        {...field} 
        className='border-[1px] border-marine-blue h-[40px] w-full outline-none rounded-md mb-3 pl-4 placeholder:text-[14px]'/>
      {touched[name] && errors[name] && <p className="text-red-500">{String(errors[name])}</p>}
    </div>
  );
};

export default TextInput;
