import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import DetailCard from "../components/cards/DetailCard";
import { IoArrowBackOutline } from "react-icons/io5";

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
        <div className=" dark:bg-slate-900 bg-slate-100 dark:text-white h-screen">
          <Link to="/">
            <button className=" ml-6 my-8 w-1/3 bg-white md:mx-12  md:w-1/6 md:h-10  dark:bg-slate-800 rounded-sm">
              <IoArrowBackOutline className="inline mr-2 md:mr-6" />
              <span className="text-sm">Back</span>
            </button>
          </Link>
          <DetailCard country={country} />
        </div>
      </>
    );
  }
};

export default CountryDetail;
