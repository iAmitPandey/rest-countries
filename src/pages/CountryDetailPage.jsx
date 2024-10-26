import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import DetailCard from "../components/cards/DetailCard";

const CountryDetail = () => {
  const [country, setCountry] = useState([]);
  const [loader, setLoader] = useState(true);
  const nevigate = useNavigate();

  const { name } = useParams();
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        let res = await fetch(
          `https://restcountries.com/v3.1/name/${name}/?fullText=true`
        );
        if (res.status === 404) nevigate("*");
        let data = await res.json();
        setCountry(data);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, [name]);
  if (loader) {
    return <Loader />;
  } else {
    return (
      <>
        <div className=" dark:bg-slate-800 dark:text-white">
          <Link to="/">
            <button className="mr-2 border solid">back</button>
          </Link>
          <DetailCard country={country} />
        </div>
      </>
    );
  }
};

export default CountryDetail;
