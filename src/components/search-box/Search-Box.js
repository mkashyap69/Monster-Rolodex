import React from 'react';
import './search-box.styles.css';

export const SearchBox = (props) => {
  return (
    <input
      className="search"
      onChange={props.onFieldChange}
      type="search"
      placeholder={props.placeholder}
    />
  );
};
