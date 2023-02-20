import {useState }from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addContact } from 'redux/contactSlise';
import { nanoid } from 'nanoid/non-secure'
import FormPhonebook from './Form/Form';
import InputName from './Input/InputName';
import InputNumber from './Input/InputNumber';
import LabelPhoneBook from './Label/Label.styled';
import ButtonSubmit from './Button/ButtonSubmit';

const Phonebook =()=> { 
       const [name, setName]= useState('');
       const [number,setNumber]= useState('');
       const dispatch = useDispatch();
       const contacts = useSelector(state => state.contacts.item);
      
         const handleChange = e =>{
        
         switch (e.currentTarget.name){
         case 'name':
         setName (e.currentTarget.value);
         break;
         case 'number':
         setNumber(e.currentTarget.value)
         break;
         default:
         return;
        }
       };

       const reset =()=>{
        setName('');
        setNumber('');
       };

     const clickOnBtnSubmit=event=>{
        event.preventDefault();
        formSubmitHandle({name,number});
        reset();
      };
     
      const formSubmitHandle = data =>{
        const id = nanoid();
        if (contacts.filter(contacts => contacts.name === data.name).length > 0){
          alert (`${data.name}  already in contacts `);
          return;
        }  
        data.id = id;
        dispatch (addContact(data));
      };
      
      

        return(
            <>
            <FormPhonebook onSubmit={clickOnBtnSubmit}>
                <LabelPhoneBook title="Name">     
            <InputName value={name} onChange={handleChange}/>
            </LabelPhoneBook>
            <LabelPhoneBook title="Number">
            <InputNumber value={number} onChange={handleChange}/>
            </LabelPhoneBook>
           <ButtonSubmit text="Add contact"/>
            </FormPhonebook>
            </>
        );
       }
    

export default Phonebook;



