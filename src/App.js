import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';
import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([])
  const [cart, setCart]=useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  const handleAddCountry=(countries) => {
 const addCountry= [...cart, countries];
 setCart(addCountry);
 }

  return (
    <div className="App"> 
       <div className='country-show'>
       
        {
          countries.map(country => <Country countries={country} handleAddCountry={handleAddCountry}></Country>)
        }
      </div>
      <div className='add-country'>
      
    <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default App;
