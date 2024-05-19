import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
const ContactList = ({ usersList }) => {
  return (
    <ul className={styles.users}>
      {usersList.map((user) => (
        <Contact key={user.id} currentUser={user} />
      ))}
    </ul>
  );
};

export default ContactList;
