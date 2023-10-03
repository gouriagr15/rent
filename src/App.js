import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertyDetails from './components/PropertyDetails';
import PropertyCard from './components/PropertyCard';
import hotelsData from './Hoteldata.json';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const cities = ['New York', 'Mumbai', 'Paris', 'London'];
  const defaultCity = 'London'; // Set London as the default active city
  const [activeCity, setActiveCity] = useState(defaultCity);
  const chunkedProperties = [];
  const [cardsToShow, setCardsToShow] = useState(6); // Initial number of cards to show

  // Function to load more cards
  const loadMoreCards = () => {
    setCardsToShow(cardsToShow + 3); // Increase the number of cards to show by 3
  };

  // Filter the data based on the number of cards to show
  const filteredData = hotelsData.slice(0, cardsToShow);
  for (let i = 0; i < hotelsData.length; i += 3) {
    chunkedProperties.push(hotelsData.slice(i, i + 3));
  }

  // Function to handle tab clicks
  const handleTabClick = (city) => {
    setActiveCity(city);
  };

  return (
    <Router>
      <div className="App">
        <h1 className='heading'>Featured Listed Property</h1>
        <div className="city-tabs">
          {cities.map((city) => (
            <button
              key={city}
              className={activeCity === city ? 'active' : ''}
              onClick={() => handleTabClick(city)}
              style={{ padding: "5px", margin: "5px" }}
            >
              {city}
            </button>
          ))}
        </div>
        <div className='container'>
          <div className='row'>
            {filteredData.map((property) => (
              <div key={property.id} className='col-md-4'>
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
          {cardsToShow < hotelsData.length && (
            <div className='text-center'>
              <button className='btn btn-primary' onClick={loadMoreCards}>
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
      <Routes>
        <Route path="/property/:id" Component={PropertyDetails} />
      </Routes>
    </Router>
  );
}

export default App;
