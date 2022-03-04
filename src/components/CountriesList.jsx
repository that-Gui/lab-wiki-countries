import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function CountriesList() {

  const [first, setfirst] = useState(null)

  useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/`)
      .then((response) => {
        console.log(response.data);
        setfirst(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {first && first.map((el) =>
       <div >
           <Link to={el.alpha3Code}>
           
           <img src={`https://flagpedia.net/data/flags/icon/72x54/${el.alpha2Code.toLowerCase()}.png`} alt="flag" />
           <h1>{el.name.official}</h1>
           </Link>
       </div>
       )} 
    </div>
  )
}

export default CountriesList

//<Country cut={el} />