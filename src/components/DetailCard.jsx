import React from "react";

const DetailCard = ({ country }) => {
  //   console.log(Object.values(country[0]?.name.nativeName)[0].common);
  return (
    <>
      <div>
        <img src={country[0]?.flags.png} alt={country[0]?.name.common} />
        <h1>{country[0]?.name.common}</h1>
        <ul>
          <li>
            Native Name:{" "}
            {/* {Object.values(country[0]?.name.nativeName)[0]?.common}{" "} */}
          </li>
          <li>Population: {} </li>
          <li>Region: {} </li>
          <li>Sub Region: {} </li>
          <li>Capital: {country[0]?.capital} </li>
        </ul>
      </div>
    </>
  );
};

export default DetailCard;
