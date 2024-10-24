const SearchFeild = ({
  countryData,
  selectedRegion,
  selectedSubRegion,
  setSelectedSubRegion,
}) => {
  const onSubRegionChange = (e) => {
    const subRegion = e.target.value;
    setSelectedSubRegion(subRegion);
  };

  return (
    <>
      <div className="flex flex-wrap m-4 box-border">
        <select value={selectedSubRegion} onChange={onSubRegionChange}>
          <option value="">Filter by Sub-region</option>

          {countryData
            .filter((country) => {
              return selectedRegion ? country.region === selectedRegion : true;
            })
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
