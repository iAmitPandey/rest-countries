import React, { useEffect, useState } from "react";
import Card from "./Card";
import SearchFeild from "./SearchFeild";

const HomePage = () => {
  const [countryData, setCountryData] = useState([]);
  const [filteredCountryData, setFilteredCountryData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        let res = await fetch("https://restcountries.com/v3.1/all");
        let data = await res.json();
        setCountryData(data);
        setFilteredCountryData(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <>
      <SearchFeild
        searchValue={searchValue}
        countryData={countryData}
        setSearchValue={setSearchValue}
        filteredCountryData={filteredCountryData}
        setFilteredCountryData={setFilteredCountryData}
      />
      {filteredCountryData.map((country, index) => (
        <Card key={index} country={country} />
      ))}
    </>
  );
};

export default HomePage;
