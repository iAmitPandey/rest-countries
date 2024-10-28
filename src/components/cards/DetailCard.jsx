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
      <div className="dark:bg-slate-900 md:mx-12 bg-slate-100 dark:text-white mt-4 md:grid md:grid-cols-3 mx-6">
        <div className="md:col-span-1">
          <img src={country[0]?.flags.png} alt={country[0]?.name.common} />
        </div>
        <div className="md:col-span-2">
          <div className="md:grid md:grid-cols-2">
            <div>
              <h1 className="ml-6 my-4 font-bold text-xl">
                {country[0]?.name.common}
              </h1>
              <ul className="ml-6 my-4  text-m">
                <li className="mt-2 font-thin">
                  <span className="font-bold mr-2">Native Name:</span>
                  {Object.values(country[0]?.name.nativeName)[0]?.common}
                </li>
                <li className="mt-2 font-thin">
                  <span className="font-bold mr-2">Population:</span>
                  {country[0]?.population}{" "}
                </li>
                <li className="mt-2 font-thin">
                  <span className="font-bold mr-2">Region:</span>
                  {country[0]?.region}{" "}
                </li>
                <li className="mt-2 font-thin">
                  <span className="font-bold mr-2">Sub Region:</span>
                  {country[0]?.subregion}{" "}
                </li>
                <li className="mt-2 font-thin">
                  <span className="font-bold mr-2">Capital:</span>
                  {country[0]?.capital}{" "}
                </li>
              </ul>
            </div>

            <ul className="mx-6 md:flex md:flex-col md:justify-center">
              <li className="mt-2 font-thin">
                <span className="font-bold mr-2">Top Level Domain:</span>{" "}
                {country[0]?.tld}
              </li>
              <li className="mt-2 font-thin">
                <span className="font-bold mr-2">Currencies:</span>{" "}
                {Object.values(country[0]?.currencies)[0].name}
              </li>
              <li className="mt-2 font-thin">
                <span className="font-bold mr-2">Languages:</span>
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
          </div>

          <div className="mx-6">
            <span className="font-bold mr-2">Border Countries:</span>
            <br />
            {country[0]?.borders?.map((neighborCode) => (
              <button
                key={neighborCode}
                className="mr-2 dark:bg-slate-800 rounded-sm text-xs  "
                onClick={() =>
                  handleNeighborClick(borderCountryNames[neighborCode])
                }
              >
                {borderCountryNames[neighborCode]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
