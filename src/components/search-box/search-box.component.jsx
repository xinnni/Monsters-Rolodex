import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ handleChange }) => {
  return (
    <input
      placeholder="Search Monsters"
      onFocus={(e) => (e.target.placeholder = "")}
      onBlur={(e) => (e.target.placeholder = "Search Monsters")}
      className="search"
      type="search"
      onChange={handleChange}
    />
  );
};
