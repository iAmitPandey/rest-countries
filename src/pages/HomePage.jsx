import React, { useEffect, useState } from "react";
import Card from "../components/Card";
// import SearchFeild from "../components/SearchFeild";
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
        return country.region === selectedRegion;
      }
      return true;
    })
    .filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.includes(searchValue);
    });

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

  const byRegion = countryData //
    .reduce((regions, country) => {
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
      />

      {/* <FilterData
        countryData={bySubRegion}
        selectedRegion={selectedSubRegion}
        onRegionChange={onSubRegionChange}
      /> */}

      {/* <FilterData
        countryData={countryData}
        selectedRegion={selectedRegion}
        onRegionChange={onRegionChange}
      /> */}

      {/* <SearchFeild
        countryData={countryData}
        selectedRegion={selectedRegion}
        selectedSubRegion={selectedSubRegion}
        setSelectedSubRegion={setSelectedSubRegion}
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
