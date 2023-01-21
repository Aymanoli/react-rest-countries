import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flags, capital, population, region} = props.country;
    // console.log(props.country)

    return (
        <div className='country'>
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p><small>Region: {region}</small></p>
            <p><b>Capital is:</b> {capital} <b>population:</b> {population}</p>
        </div>
    );
};

export default Country;