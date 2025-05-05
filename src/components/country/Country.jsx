import React, { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    console.log(country);
    const {name} = country;
    const {common} = name;
    const [visited, setVisited] = useState(false);
    const handleVisit = () =>{
        // visited? setVisited(false) : setVisited(true);
        setVisited(!visited);
    }
    return (
        <div className='country'>
            <h2>Name : {common}</h2>
            <h3>Capital : {country.capital}</h3>
            <h4>Population : {country.population}</h4>
            <img src={country.flags.png} alt="" />
            <button className={`${visited && 'country-visited'}`}  onClick={handleVisit}>{
                visited? 'Visited' : 'Not visited'
                }</button>
        </div>
    );
};

export default Country;