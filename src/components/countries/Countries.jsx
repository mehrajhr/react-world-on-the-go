import React, { use, useState } from "react";
import Country from "../country/Country";
import "./countries.css";

const Countries = ({ promiseCountries }) => {
  const countries = use(promiseCountries);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    // console.log('visited country to be addeded',country);
    const newVisitedCountry = [...visitedCountries , country];
    setVisitedCountries(newVisitedCountry);
  }
  return (
    <div>
      <h2>Travelling countries</h2>
      <h2>visited countries : {visitedCountries.length}</h2>
      <ol>
        {
          visitedCountries.map(country => <li>{country.name.common}</li>)
        }
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
