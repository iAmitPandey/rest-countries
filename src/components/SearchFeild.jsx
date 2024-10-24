import React, { useState } from "react";

const SearchFeild = ({
  searchValue,
  countryData,
  setSearchValue,
  selectedRegion,
  setSelectedRegion,
  selectedSubRegion,
  setSelectedSubRegion,
}) => {
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

  return (
    <>
      <div className="flex flex-wrap m-4 box-border">
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

          {countryData
            .filter((country) => country.region === selectedRegion)
            .reduce((subRegions, country) => {
              if (!subRegions.includes(country.subregion)) {
                subRegions.push(country.subregion);
              }
              return subRegions;
            }, [])
            .map((subRegion, index) => (
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
