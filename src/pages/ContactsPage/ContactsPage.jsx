import css from "./ContactsPage.module.css";

import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

import { selectLoading } from "../../redux/contactsSlice";
import { selectError } from "../../redux/contactsSlice";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Contacts Page</h1>

      <h2 className={css.title}>Phonebook</h2>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <Error />}
      <ContactList />
    </div>
  );
}
