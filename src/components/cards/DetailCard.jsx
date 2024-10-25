import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailCard = ({ country }) => {
  const [borderCountryNames, setBorderCountryNames] = useState({});
  const fetchCountryName = async (code) => {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    const data = await res.json();
    return data[0]?.name.common;
  };

  const navigate = useNavigate();
  const handleNeighborClick = (neighbor) => {
    navigate(`/detail-page/${neighbor}`);
  };
  // Fetch the names for all border countries
  useEffect(() => {
    const fetchBorderNames = async () => {
      const names = {};
      if (country[0]?.borders) {
        for (let borderCode of country[0].borders) {
          names[borderCode] = await fetchCountryName(borderCode);
        }
      }
      setBorderCountryNames(names);
    };
    fetchBorderNames();
  }, [country]);
  return (
    <>
      <div>
        <img src={country[0]?.flags.png} alt={country[0]?.name.common} />
        <h1>{country[0]?.name.common}</h1>
        <ul>
          <li>
            Native Name:
            {Object.values(country[0]?.name.nativeName)[0]?.common}
          </li>
          <li>Population: {country[0]?.population} </li>
          <li>Region: {country[0]?.region} </li>
          <li>Sub Region: {country[0]?.subregion} </li>
          <li>Capital: {country[0]?.capital} </li>
        </ul>

        <ul>
          <li>Top Level Domain: {country[0]?.tld}</li>
          <li>Currencies: {Object.values(country[0]?.currencies)[0].name}</li>
          <li>
            Languages:
            {Object.values(country[0]?.languages).map((language, index) => (
              <span key={index}>
                {language}
                {index < Object.values(country[0]?.languages).length - 1
                  ? ", "
                  : ""}
              </span>
            ))}
          </li>
        </ul>

        <div>
          Border Countries:
          <br />
          {country[0]?.borders?.map((neighborCode) => (
            <button
              key={neighborCode}
              className="mr-2 border solid"
              onClick={() =>
                handleNeighborClick(borderCountryNames[neighborCode])
              }
            >
              {borderCountryNames[neighborCode]}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailCard;
