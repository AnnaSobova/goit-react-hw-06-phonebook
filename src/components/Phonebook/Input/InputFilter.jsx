import React from 'react';
import Input from './Input.styled';
import { useDispatch, useSelector } from 'react-redux';
import {filterContact} from 'redux/contactSlise';



const InputFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChange = e => {
    dispatch(filterContact(e.currentTarget.value));
  };
  return(
     <>
    <Input
      type="text"
      name="filter"
      placeholder="Find contact"
      onChange={handleChange}
      value={filter}
    />
  </>
  )
}

  

export default InputFilter;

