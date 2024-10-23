import React from "react";

const Card = ({ country }) => {
  // console.log(props.country.name.common);
  return (
    <>
      <div className="">
        <div>
          <img src={country.flags.svg} alt="" />
        </div>
        <ul>
          <li>
            <h1 className="border-solid border-2 border-sky-500">
              {country.name.common}
            </h1>
          </li>
          <li>Population: {country.population}</li>
          <li>Region: {country.region}</li>
          <li>Capital: {country.capital}</li>
        </ul>
      </div>
    </>
  );
};

export default Card;
