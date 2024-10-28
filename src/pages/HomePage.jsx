import React, { useEffect, useState } from "react";
import Card from "../components/cards/Card";
import UserInput from "../components/UserInput";
import FilterData from "../components/FilterData";

import { countryFilter } from "../utils/countryFilter";

import Loader from "../components/Loader";

const HomePage = () => {
  const [countryData, setCountryData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedSubRegion, setSelectedSubRegion] = useState("");
  const [sortingType, setSortType] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        let res = await fetch("https://restcountries.com/v3.1/all");
        let data = await res.json();
        setCountryData(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountryData = countryFilter(
    countryData,
    selectedRegion,
    selectedSubRegion,
    searchValue,
    sortingType
  );

  const onSearchValueChange = (e) => {
    const userInputValue = e.target.value.toLowerCase();
    setSearchValue(userInputValue);
  };

  const onRegionChange = (e) => {
    const region = e.target.value;
    setSelectedSubRegion("");
    setSelectedRegion(region);
  };

  const onSubRegionChange = (e) => {
    const subRegion = e.target.value;
    setSelectedSubRegion(subRegion);
  };

  const onSelectedOrderChange = (e) => {
    const selectOrder = e.target.value;
    setSortType(selectOrder);
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
      <div className="bg-slate-100 dark:bg-slate-900  dark:text-white">
        <div className="grid p-4 grid-cols-1 items-center  box-border dark:bg-slate-900   dark:text-white md:pl-16 md:grid md:grid-cols-4  md:gap-2 xl:p-12">
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

          <FilterData
            countryData={sortType}
            selectedRegion={sortingType}
            onRegionChange={onSelectedOrderChange}
            placeHolder="Sort by"
          />
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 bg-slate-100 lg:grid-cols-4 gap-16 p-4 bg-white-50 dark:bg-slate-900 md:mx-8">
          {loading ? (
            <Loader />
          ) : (
            filteredCountryData.map((country, index) => (
              <Card key={index} country={country} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
