import React from "react";

const FilterDate = ({
  countryData,
  selectedRegion,
  onRegionChange,
  placeHolder,
}) => {
  return (
    <>
      <select value={selectedRegion} onChange={onRegionChange}>
        <option value=""> {placeHolder}</option>
        {countryData.map((region, index) => (
          <option value={region} key={index}>
            {region}
          </option>
        ))}
      </select>
    </>
  );
};

export default FilterDate;
