import { useState } from "react";
import "modern-normalize";
import "./App.css";
import ContactList from "./ContactList/ContactList.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";

function App() {
  const [users, setUsers] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filterUsers, setFilterUsers] = useState("");
  const isFilter = users.filter((user) =>
    user.name.toLowerCase().includes(filterUsers.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox
        value={filterUsers}
        onChange={(evt) => setFilterUsers(evt.target.value)}
      />
      <ContactList usersList={isFilter} />
    </div>
  );
}

export default App;
