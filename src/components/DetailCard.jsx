const DetailCard = ({ country }) => {
  console.log(Object.values(country[0]?.languages));

  return (
    <>
      <div>
        <img src={country[0]?.flags.png} alt={country[0]?.name.common} />
        <h1>{country[0]?.name.common}</h1>
        <ul>
          <li>
            Native Name:
            {Object.values(country[0]?.name.nativeName)[0]?.common}
          </li>
          <li>Population: {country[0]?.population} </li>
          <li>Region: {country[0]?.region} </li>
          <li>Sub Region: {country[0]?.subregion} </li>
          <li>Capital: {country[0]?.capital} </li>
        </ul>

        <ul>
          <li>Top Level Domain: {country[0]?.tld}</li>
          <li>Currencies: {Object.values(country[0]?.currencies)[0].name}</li>
          {/* <li>Languages: {Object.values(country[0]?.languages)}</li> */}
        </ul>
      </div>
    </>
  );
};

export default DetailCard;
