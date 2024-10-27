import { Link } from "react-router-dom";

const Card = ({ country }) => {
  return (
    <>
      <div className="flex flex-col dark:bg-slate-800 dark:text-white">
        <div className="h-[200px] w-full">
          <Link to={"/detail-page/" + country.name.common}>
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="h-full w-full rounded-t-md object-fill"
            />
          </Link>
        </div>
        <ul className="my-2 mx-4 h-40  grid grid-cols-1">
          <li>
            <h1 className="font-bold text-md my-2">{country.name.common}</h1>
          </li>
          <li className="text-sm my-1 flex">
            <p className="font-medium mr-2">Population:</p> {country.population}
          </li>
          <li className="text-sm my-1 flex ">
            {" "}
            <p className="font-medium mr-2"> Region:</p>
            {country.region}
          </li>
          <li className="text-sm my-1 flex mb -4">
            <p className="font-medium mr-2">Capital:</p> {country.capital}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Card;
