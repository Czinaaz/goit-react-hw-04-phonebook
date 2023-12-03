import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

function Filter({ filter, handlerFilter }) {
  return (
    <label className={css.label}>
      Find contacts by name or phone-number
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handlerFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handlerFilter: PropTypes.func.isRequired,
};

export default Filter;
