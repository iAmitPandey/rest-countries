import React, { useEffect, useState } from "react";
import Card from "../components/cards/Card";
import UserInput from "../components/UserInput";
import FilterData from "../components/FilterData";

const HomePage = () => {
  const [countryData, setCountryData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedSubRegion, setSelectedSubRegion] = useState("");
  const [sortingType, setSortType] = useState("");

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
      if (selectedSubRegion) {
        return country.subregion === selectedSubRegion;
      }
      return true;
    })
    .filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.includes(searchValue);
      // return countryName.startsWith(searchValue);
    })
    .sort((firstCountry, secondCountry) => {
      if (sortingType === "Ascending Area") {
        return firstCountry.area - secondCountry.area;
      } else if (sortingType === "Descending Area") {
        return secondCountry.area - firstCountry.area;
      } else if (sortingType === "Ascending Population") {
        return firstCountry.population - secondCountry.population;
      } else if (sortingType === "Descending Population") {
        return secondCountry.population - firstCountry.population;
      }
      return true;
    });

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
      <div className="dark:bg-slate-900  dark:text-white">
        <div className="grid p-4 grid-cols-1 items-center  box-border dark:bg-slate-900  dark:text-white md:p-8 md:grid md:grid-cols-4  md:gap-2 xl:p-12">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  p-4 md:p-8 bg-white-50 dark:bg-slate-900">
          {filteredCountryData.map((country, index) => (
            <Card key={index} country={country} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
