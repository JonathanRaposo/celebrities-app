import ironContacts from './contacts.json';
import { useState } from 'react';
import ContactList from './components/ContactList'

const App = () => {
  const [celebrities, setCelebrities] = useState(ironContacts.slice(0, 5));
  const [remainingCelebrities, setRemainingCelebrities] = useState(ironContacts.slice(5))

  console.log(ironContacts.length)
  // add random contact to the list: 
  const AddRandomContact = () => {
    if (remainingCelebrities > 0) {
      const randomIndex = Math.floor(Math.random() * remainingCelebrities.length);
      const randomContact = remainingCelebrities[randomIndex];

      setCelebrities([...celebrities, randomContact])
      const updatedRemaining = remainingCelebrities.filter((celeb) => celeb.id !== randomContact.id);
      setRemainingCelebrities(updatedRemaining)
    }
  }
  // sort by popularity:
  const sortByPopularity = () => {
    const listCopy = [...celebrities]
    const sortedContacts = listCopy.sort((a, b) => b.popularity - a.popularity)
    setCelebrities(sortedContacts);
  }

  const sortByName = () => {
    const listCopy = [...celebrities];
    const sortedNames = listCopy.sort((a, b) => a.name > b.name ? 1 : -1)
    setCelebrities(sortedNames)
  }

  const deleteContact = (id) => {
    const filteredContacts = celebrities.filter((contact) => contact.id !== id);
    setCelebrities(filteredContacts);
  }
  // make two digits after decimal point:
  const convert = (num) => {
    let newVal = num.toFixed(2);
    return Number(newVal);
  }

  return (
    <div className="App">

      <ContactList
        celebrities={celebrities}
        AddRandomContact={AddRandomContact}
        sortByPopularity={sortByPopularity}
        sortByName={sortByName}
        deleteContact={deleteContact}
        convert={convert}

      />

    </div>
  );
}

export default App;
