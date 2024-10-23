import React, { useState } from "react";

const SearchFeild = ({
  searchValue,
  countryData,
  setSearchValue,
  filteredCountryData,
  setFilteredCountryData,
}) => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedSubRegion, setSelectedSubRegion] = useState("");

  const onSearchValueChange = (e) => {
    const userInputValue = e.target.value.toLowerCase();
    setSearchValue(userInputValue);
    filterCountries(userInputValue, selectedRegion);
  };

  const onRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    filterCountries(searchValue, region);
  };

  const onSubRegionChange = (e) => {
    const subRegion = e.target.value;
    setSelectedSubRegion(subRegion);
    filterCountries(searchValue, subRegion);
  };

  const filterCountries = (searchValue, region) => {
    const updatedCountries = countryData
      .filter((country) => {
        // Filter by region if region is selected
        if (region) {
          return country.region === region;
        }
        return true;
      })
      .filter((country) => {
        // Filter by country name
        const countryName = country.name.common.toLowerCase();
        return countryName.startsWith(searchValue);
      });
    setFilteredCountryData(updatedCountries);
  };

  return (
    <>
      <div className="flex justify-between">
        <form>
          <input
            type="text"
            placeholder="Search for a country"
            value={searchValue}
            onChange={onSearchValueChange}
          />
        </form>
        <select value={selectedRegion} onChange={onRegionChange}>
          <option value="">Filter by Region</option>

          {countryData
            .reduce((regions, country) => {
              if (!regions.includes(country.region)) {
                regions.push(country.region);
              }
              return regions;
            }, [])
            .map((region) => (
              <option value={region} key={region}>
                {region}
              </option>
            ))}
        </select>

        <select value={selectedSubRegion} onChange={onSubRegionChange}>
          <option value="">Filter by Sub-region</option>

          {filteredCountryData
            .reduce((subRegions, country) => {
              if (!subRegions.includes(country.subregion)) {
                subRegions.push(country.subregion);
              }
              return subRegions;
            }, [])
            .map((subRegion, index) => (
              // console.log(subRegion)
              <option value={subRegion} key={index}>
                {subRegion}
              </option>
            ))}
        </select>
      </div>
    </>
  );
};

export default SearchFeild;
