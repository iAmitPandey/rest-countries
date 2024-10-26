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

export default filteredCountryData;
