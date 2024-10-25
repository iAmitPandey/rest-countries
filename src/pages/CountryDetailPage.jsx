import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import DetailCard from "../components/cards/DetailCard";

const CountryDetail = () => {
  const [country, setCountry] = useState([]);
  const [loader, setLoader] = useState(true);

  const { name } = useParams();
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        let res = await fetch(
          `https://restcountries.com/v3.1/name/${name}/?fullText=true`
        );
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
        <Link to="/">
          <button className="mr-2 border solid">back</button>
        </Link>
        <DetailCard country={country} />
      </>
    );
  }
};

export default CountryDetail;
