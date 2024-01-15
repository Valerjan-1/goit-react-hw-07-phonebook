import { useDispatch, useSelector } from 'react-redux';
import { getCont, getFilter } from '../../redux/selectors';
import { delContactsThunk } from '../../redux/contactsThunk';

const ContactList = function () {
  const dispatch = useDispatch();
  const filtered = useSelector(getFilter);
  const contacts = useSelector(getCont);

  const filterContact = e => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
  };

  const filteredContacts = filterContact();

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}:{number}
            <button
              data-id={id}
              onClick={() => dispatch(delContactsThunk(id))}
              type="button"
            >
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;