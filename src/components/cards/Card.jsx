import { Link } from "react-router-dom";

const Card = ({ country }) => {
  return (
    <>
      <div className="flex flex-col dark:bg-slate-800 dark:text-white">
        <div className="h-[200px] w-full flex">
          <Link to={"/detail-page/" + country.name.common}>
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="h-full w-full rounded-t-md object-fill"
            />
          </Link>
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
