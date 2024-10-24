import React from "react";

const Card = ({ country }) => {
  // console.log(props.country.name.common);
  return (
    <>
      <div className="flex flex-col ">
        <div className="h-[200px] w-full flex">
          <img
            src={country.flags.png}
            alt=""
            className="h-full w-full rounded-t-md object-fill"
          />
        </div>
        <ul>
          <li>
            <h1 className="font-bold text-md mb-2 ">{country.name.common}</h1>
          </li>
          <li className="text-sm mb-2">Population: {country.population}</li>
          <li className="text-sm mb-2">Region: {country.region}</li>
          <li className="text-sm mb-2">Capital: {country.capital}</li>
        </ul>
      </div>
    </>
  );
};

export default Card;
