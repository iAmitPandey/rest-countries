import React from "react";

const UserInput = ({ searchValue, onSearchValueChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search for a country"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </>
  );
};

export default UserInput;
