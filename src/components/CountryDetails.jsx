import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CountryDetails() {
    let { id } = useParams();
    const [rightone, setRightone] = useState(null)
    /* const rightone = props.list.find( (el) => {return el.alpha3Code === id}

    ) */
        useEffect(() => {
            axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
              .then((response) => {
                console.log(response.data);
                setRightone(response.data);
              })
              .catch((err) => {
                console.log(err);
              });
          }, [id]);
    
    

  return (
    <div>
        {rightone && (
        <>
        <h1>{rightone.name.official}</h1>
        <h3> Catipal City: {rightone.capital}</h3>
        <p>Official Languages: {rightone.languages.prs}</p>
        </>          
        )}
    </div>
  )
}

export default CountryDetails