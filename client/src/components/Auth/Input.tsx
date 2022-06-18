
import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

interface Props {
  name: string;
  value: string;
  handleChange: (e: React.FormEvent) => void;
  label: string;
  autoFocus: boolean;
  type: string;
}

const Input: React.FC<Props> = ({ name, value, handleChange, label, autoFocus, type }) => (
  <div className='flex flex-col mt-2'>
    <label className='text-lg font-medium'>{label}</label>
    <input
      className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
      name={name}
      value={value}
      onChange={handleChange}
      required
      autoFocus={autoFocus}
      type={type}
      placeholder={`Enter your ${label.toLowerCase()}`}
    />
  </div>
);

export default Input;
