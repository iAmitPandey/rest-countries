import React from "react";

const FilterDate = ({
  countryData,
  selectedRegion,
  onRegionChange,
  placeHolder,
}) => {
  return (
    <>
      <select
        value={selectedRegion}
        onChange={onRegionChange}
        className="dark:bg-slate-800 dark:text-white mb-2 text-sm "
      >
        <option value="" className="text-sm">
          {placeHolder}
        </option>
        {countryData.map((region, index) => (
          <option
            value={region}
            key={index}
            className="text-sm rounded-sm mb-2"
          >
            {region}
          </option>
        ))}
      </select>
    </>
  );
};

export default FilterDate;
