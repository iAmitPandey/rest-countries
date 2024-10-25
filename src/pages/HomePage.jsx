import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import UserInput from "../components/UserInput";
import FilterData from "../components/FilterData";

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
        // if (selectedSubRegion) {
        //   return country.subRegion === selectedSubRegion;
        // }
        return country.region === selectedRegion;
      }
      return true;
    })
    .filter((country) => {
      if (selectedSubRegion) {
        return country.subRegion === selectedSubRegion;
      }
      return true;
    })
    .filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.includes(searchValue);
    });

  // const filteredCountryData = countryData.filter((country) => {
  //   const countryName = country.name.common.toLowerCase();
  //   const matchesRegion = selectedRegion
  //     ? country.region === selectedRegion
  //     : true;
  //   const matchesSubRegion = selectedSubRegion
  //     ? country.subRegion === selectedSubRegion
  //     : true;
  //   const matchesSearch = countryName.includes(searchValue.toLowerCase());

  //   return matchesRegion && matchesSubRegion && matchesSearch;
  // });

  const onSearchValueChange = (e) => {
    const userInputValue = e.target.value.toLowerCase();
    setSearchValue(userInputValue);
  };

  const onRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
  };

  const onSubRegionChange = (e) => {
    const subRegion = e.target.value;
    setSelectedSubRegion(subRegion);
  };

  const byRegion = countryData.reduce((regions, country) => {
    if (!regions.includes(country.region)) {
      regions.push(country.region);
    }
    return regions;
  }, []);

  const bySubRegion = countryData
    .filter((country) => {
      return selectedRegion ? country.region === selectedRegion : true;
    })
    .reduce((subRegions, country) => {
      if (!subRegions.includes(country.subregion)) {
        subRegions.push(country.subregion);
      }
      return subRegions;
    }, []);

  const sortType = [
    "Ascending Area",
    "Descending Area",
    "Ascending Population",
    "Descending Population",
  ];

  return (
    <>
      <UserInput
        searchValue={searchValue}
        onSearchValueChange={onSearchValueChange}
      />

      <FilterData
        countryData={byRegion}
        selectedRegion={selectedRegion}
        onRegionChange={onRegionChange}
        placeHolder="Filter by Region"
      />

      <FilterData
        countryData={bySubRegion}
        selectedRegion={selectedSubRegion}
        onRegionChange={onSubRegionChange}
        placeHolder="Filter by Sub Region"
      />

      {/* <FilterData
        countryData={sortType}
        selectedRegion={selectedRegion}
        onRegionChange={onRegionChange}
        placeHolder="Sort by"
      /> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 p-4 bg-white-50">
        {filteredCountryData.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
