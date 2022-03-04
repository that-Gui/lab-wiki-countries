//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";

//import section for components
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

//import section for data
import Data from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
      <div className="row">

        <div className='col-5'>
          <CountriesList />
       </div>
       <div className='col-7'>
        <Routes>
          <Route path="/:id" element={ <CountryDetails /> } />
        </Routes> 
       </div>

      </div>
      </div>
    </div>
  );
}

export default App;
