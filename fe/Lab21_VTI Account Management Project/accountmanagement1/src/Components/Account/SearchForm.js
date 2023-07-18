/** @format */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PropTypes } from "prop-types";
import { useRef } from "react";

SearchForm.prototype = {
  onsubmit: PropTypes.func,
};

SearchForm.defaultProps = {
  onsubmit: null,
};
function SearchForm(props) {
  const { onsubmit } = props;
  let [search_Key, setsearch_Key] = useState("");
  const typingTimeoutRef = useRef(null);
  let { handleFiltersChange } = props;
  let handleSearchKeyChange = (e) => {
    const value = e.target.value;
    setsearch_Key(value);
    if (!onsubmit) return;
    // set 100--clear, set 300 --- submit
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        search_Key: value,
      };
      onsubmit(formValue);
    }, 300);
  };
  function handleSearch() {
    console.log("ban vua tim kiem");
  }
  return (
    <div class='input-group rounded'>
      <input
        type='search'
        class='form-control rounded'
        placeholder='Search'
        aria-label='Search'
        aria-describedby='search-addon'
        name='search_Key'
        value={search_Key}
        onChange={handleSearchKeyChange}
        onKeyUp={handleSearch}
      />
      <button type='button' class='btn btn-primary' onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchForm;
