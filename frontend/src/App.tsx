import "./App.css";
import { useState, useMemo } from "react";
import PriceTracker from "./components/PriceTracker";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Card from "./components/Card";
import tokens from "./tokens";
import TokenModal from "./components/TokenModal";

interface Token {
  name: string;
  id: string;
  collection: string;
  type: string;
  imageUrl: string;
  link: string;
}

const App = () => {
  const [currentFilter, setCurrentFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);

  const handleFilterChange = (filterName: string) => {
    setCurrentFilter(filterName);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const filteredTokens = useMemo(() => {
    let result = tokens.filter((token: Token) => {
      return currentFilter === "All" || token.type === currentFilter;
    });
    if (searchQuery) {
      result = result.filter(
        (token: Token) =>
          token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          token.collection.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return result;
  }, [currentFilter, tokens, searchQuery]);

  const openModal = (token: Token) => {
    setSelectedToken(token);
  };

  const closeModal = () => {
    setSelectedToken(null);
  };

  return (
    <section className="App">
      <header>
        <h1>Explore Tokens</h1>
        <PriceTracker />
      </header>
      <Nav
        onNavLinkClick={handleFilterChange}
        onSearchChange={handleSearchChange}
      />
      <section className="cardContainer">
        {filteredTokens.length > 0 ? (
          filteredTokens.map((token: Token) => (
            <div key={token.name}>
              <Card
                name={token.name}
                id={token.id}
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
        <TokenModal
          isOpen={!!selectedToken}
          onClose={closeModal}
          token={selectedToken}
        />
      )}
      <Footer />
    </section>
  );
};

export default App;
