import { useEffect } from "react";
import { Link } from "react-router-dom";

const DetailCard = ({ country }) => {
  // useEffect(()=>{

  // })
  const countryFinder = async (key) => {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${key}`);
    const data = await res.json();
    return data[0].cca3;
  };
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
          {country[0]?.borders?.map((negibhour, index) => (
            <Link to={"/detail-page/" + negibhour} key={negibhour}>
              <button
                key={index}
                className="mr-2 border solid"
                onClick={() => countryFinder(negibhour)}
              >
                {negibhour}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailCard;
