import React, {useState} from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function CountryDetails(props) {
    let { id } = useParams();
    const rightone = props.list.find( (el) => {return el.alpha3Code === id}

    )
  return (
    <div>
        <h1>{rightone.name.official}</h1>
    </div>
  )
}

export default CountryDetails