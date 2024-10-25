import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "./DetailCard";

const CountryDetail = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        let res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        let data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <>
      <button>back</button>
      <DetailCard country={country} />
    </>
  );
};

export default CountryDetail;
