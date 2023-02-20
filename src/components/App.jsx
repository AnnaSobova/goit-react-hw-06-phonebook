// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid/non-secure';
import Container from './container/Container';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Phonebook/Contacts/Contacts';
import { useSelector } from 'react-redux';


const App = ()=> {
  const contacts= useSelector(state => state.contacts.items);
  
//     const [contacts, setContacts]= useState (()=>{
//       const localStorageContacts= window.localStorage.getItem('contacts');
//       const parsedContacts = JSON.parse(localStorageContacts);
//       return parsedContacts || [];
//     });

//     const [filter, setFilter]= useState('');
  

// useEffect(()=>{
//   window.localStorage.setItem('contacts', JSON.stringify(contacts));
// },[contacts]);

//  const handleChange = e => {
//     setFilter(e.currentTarget.value);
    
//   };
   
//   const formSubmitHandle = data => {
//     const id = nanoid(); 
//     const isExist = contacts.find(contact => contact.name === data.name)
//      if(isExist){
//       alert(`${data.name} is already in contacts`);
//         return;
//      }

//      setContacts(prevState => {
//       return[...prevState,
//         {name: data.name,
//         number: data.number,
//         id: id}];
//      });
//     };

//   const onClickDelete = id => {
//     setContacts(contacts.filter(contact => contact.id !== id));
//   };
//   const normolizeFilter = filter.toLowerCase();
//   const visibleContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normolizeFilter)
//   );


return(
  <Container title="Phonebook">
     
     <Phonebook />
          {contacts.length > 0 ? (
          <Contacts
            name="Contacts"/>
        ) : (
          <p>Phonebook empty</p>
        )}
  </Container>
  )
 
}

export default App;