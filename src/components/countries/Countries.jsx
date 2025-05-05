import React, { use } from "react";
import Country from "../country/Country";
import "./countries.css";

const Countries = ({ promiseCountries }) => {
  const countries = use(promiseCountries);
  console.log(countries);
  return (
    <div>
      <h2>Travelling countries</h2>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
