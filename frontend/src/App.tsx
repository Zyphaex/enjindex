import './App.css';
import { useState, useMemo } from 'react';
import PriceTracker from './components/PriceTracker';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Card from './components/Card';
import tokens from './tokens';


const App = () => {
  const [currentFilter, setCurrentFilter] = useState('All');

  const handleFilterChange = (filterName: string) => {
    setCurrentFilter(filterName);
  };  
  
  const filteredTokens = useMemo(() => {
    return currentFilter === 'All'
      ? tokens
      : tokens.filter(token => token.type === currentFilter);
  }, [currentFilter, tokens]);

  return (
    <section className="App">
      <header>
        <h1>Explore NFTs</h1>
        <PriceTracker />
      </header>
      <Nav onNavLinkClick={handleFilterChange} />
      <section className="cardContainer">
      {filteredTokens.length > 0 ? (
        filteredTokens.map((token) => (
          <Card
            key={token.name}
            name={token.name}
            collection={token.collection}
            type={token.type}
            imageUrl={token.imageUrl}
            link={token.link}
          />
        ))
      ) : (
        <p>Unable to find any tokens.</p>
      )}
      </section>
      <Footer />
    </section>
  );
}

export default App;
