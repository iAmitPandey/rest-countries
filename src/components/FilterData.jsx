import React from "react";

const FilterDate = ({ countryData, selectedRegion, onRegionChange }) => {
  return (
    <>
      <select value={selectedRegion} onChange={onRegionChange}>
        <option value="">Filter by Region</option>
        {
          // countryData //
          //   .reduce((regions, country) => {
          //     if (!regions.includes(country.region)) {
          //       regions.push(country.region);
          //     }
          //     return regions;
          //   }, [])
          countryData.map((region) => (
            <option value={region} key={region}>
              {region}
            </option>
          ))
        }
      </select>
    </>
  );
};

export default FilterDate;
