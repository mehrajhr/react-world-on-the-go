import React from 'react';
import './Country.css'

const Country = ({country}) => {
    console.log(country);
    const {name} = country;
    const {common} = name;
    return (
        <div className='country'>
            <h2>Name : {common}</h2>
            <h3>Capital : {country.capital}</h3>
            <h4>Population : {country.population}</h4>
            <img src={country.flags.png} alt="" />
        </div>
    );
};

export default Country;