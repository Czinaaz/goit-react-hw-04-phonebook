import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const Form = ({ addContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handlerCreate = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const id = nanoid();
    const contact = { ...formData, id };
    addContact(contact);
    setFormData({
      name: '',
      number: '',
    });
  };

  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input1}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={formData.name}
          onChange={handlerCreate}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input2}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={formData.number}
          onChange={handlerCreate}
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

Form.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export {Form};
