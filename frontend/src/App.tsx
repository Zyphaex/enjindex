import './App.css';
import { useState, useMemo } from 'react';
import PriceTracker from './components/PriceTracker';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Card from './components/Card';
import tokens from './tokens';
import TokenModal from './components/TokenModal';

interface Token {
  name: string;
  collection: string;
  type: string;
  imageUrl: string;
  link: string;
}

const App = () => {
  const [currentFilter, setCurrentFilter] = useState<string>('All');
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);

  const handleFilterChange = (filterName: string) => {
    setCurrentFilter(filterName);
  };

  const filteredTokens = useMemo(() => {
    return currentFilter === 'All'
      ? tokens
      : tokens.filter((token: Token) => token.type === currentFilter);
  }, [currentFilter, tokens]);

  const openModal = (token: Token) => {
    setSelectedToken(token);
  };

  const closeModal = () => {
    setSelectedToken(null);
  };

  return (
    <section className="App">
      <header>
        <h1>Explore NFTs</h1>
        <PriceTracker />
      </header>
      <Nav onNavLinkClick={handleFilterChange} />
      <section className="cardContainer">
        {filteredTokens.length > 0 ? (
          filteredTokens.map((token: Token) => (
            <div key={token.name}>
              <Card
                name={token.name}
                collection={token.collection}
                type={token.type}
                imageUrl={token.imageUrl}
                link={token.link}
                onCardClick={() => openModal(token)}
              />
            </div>
          ))
        ) : (
          <p>Unable to find any tokens.</p>
        )}
      </section>
      {selectedToken && (
        <TokenModal isOpen={!!selectedToken} onClose={closeModal} token={selectedToken} />
      )}
      <Footer />
    </section>
  );
};

export default App;
