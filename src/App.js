import React, { useState } from 'react';
import Card from './Card';
import './Card.css';
import { Contacts } from './Contacts';

const App = () => {
  const [contacts, setContacts] = useState(Contacts);

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const deleteAllContacts = () => {
    setContacts([]);

  };

  return (
    <div className='app-container'>
      <h1 className="heading">{contacts.length>0?"USER LIST":"NO MORE USERS TO DELETE"}</h1>
      <div className='cards-container'>
        {contacts.map(contact => (
          <Card
            id={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            phone={contact.phone}
            address={contact.address}
            onDelete={deleteContact}
          />
        ))}
      </div>
      <div className="deleteall">
      {contacts.length>0&&(
      <button className="delbuttonall" onClick={deleteAllContacts}>Delete All</button>)}
      </div>
    </div>
  );
};

export default App;

