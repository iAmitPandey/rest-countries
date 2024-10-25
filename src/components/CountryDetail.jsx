import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import DetailCard from "./DetailCard";

const CountryDetail = () => {
  const [country, setCountry] = useState([]);
  const [loader, setLoader] = useState(true);

  const { name } = useParams();
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        let res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        let data = await res.json();
        setCountry(data);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);
  if (loader) {
    return <Loader />;
  } else {
    return (
      <>
        <button>back</button>
        <DetailCard country={country} />
      </>
    );
  }
};

export default CountryDetail;
