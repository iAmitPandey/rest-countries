import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import SearchFeild from "../components/SearchFeild";

const HomePage = () => {
  const [countryData, setCountryData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedSubRegion, setSelectedSubRegion] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        let res = await fetch("https://restcountries.com/v3.1/all");
        let data = await res.json();
        setCountryData(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountryData = countryData
    .filter((country) => {
      if (selectedRegion) {
        return country.region === selectedRegion;
      }
      return true;
    })
    .filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.includes(searchValue);
    });

  return (
    <>
      <SearchFeild
        searchValue={searchValue}
        countryData={countryData}
        setSearchValue={setSearchValue}
        filteredCountryData={filteredCountryData} //
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedSubRegion={selectedSubRegion}
        setSelectedSubRegion={setSelectedSubRegion}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 p-4 bg-white-50">
        {filteredCountryData.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
