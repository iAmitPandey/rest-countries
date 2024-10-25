import React from "react";

const UserInput = ({ searchValue, onSearchValueChange }) => {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search for a country"
          value={searchValue}
          onChange={onSearchValueChange}
        />
      </form>
    </>
  );
};

export default UserInput;
