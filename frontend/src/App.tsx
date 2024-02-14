import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Card from './components/Card';

const tokens = [
  { name: 'Enjin MFT', type: 'Metaverse', imageUrl: 'https://openseauserdata.com/files/34a76f843b3470272726fabe515eccba.jpg', link: 'https://nft.io/asset/3312-127605887595351928871620098057039773696' },
  { name: 'Priceless Binance Hoodie', type: 'Metaverse', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/67d254c8ee72edcb151789f7fc44dfa718c637fa5fbcebf5da444bd7e5bc4525.png', link: 'https://nft.io/asset/3363-149870456524749265407774008994990915585' },
  { name: 'The Green Box', type: 'Metaverse', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/f18b934aeda7301560809bf002be0eb2bcb8316db01baec1418ee4c97aee4d00.png?size=large&timestamp=1707842124846', link: 'https://nft.io/asset/3404-149870456524749276069992083599111749660' },
  { name: 'Founders Token ENJ Beam Club', type: 'Memberships', imageUrl: 'https://nft.production.enjinusercontent.com/uploads/files/5fijlg0p5nx88r67.png?size=large&timestamp=1707842326384', link: 'https://nft.io/asset/2190-7' },
  { name: 'Imperial Sovereign', type: 'Memberships', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/cc624a9397569e36883d97c5f19a638b4e490f63dd0bddb65b9332111ec16b28.png', link: 'https://nft.io/asset/2100-1' },
  { name: 'Enjin Website Builder Service Medal', type: 'Historic', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/3c83e2a693a068eb35bb2e19e6f68ae2d1075e2e569e23a6c4f6e0d01c5621c9.gif', link: 'https://nft.io/collection/enjin-website-builder-service-medal/' },
  { name: 'Tipper Token', type: 'Metaverse', imageUrl: 'https://nft.production.enjinusercontent.com/uploads/files/tzk5om2pvhpw8cbj.jpg?size=large&timestamp=1707842514959', link: 'https://nft.io/asset/2479-9' },
];

function App() {
  return (
    <section className="App">
      <h1>Explore NFTs</h1>
      <Nav />
      <section className="cardContainer">
        {tokens.map((token, index) => (
          <Card 
            key={index}
            name={token.name} 
            type={token.type} 
            imageUrl={token.imageUrl} 
            link={token.link} 
          />
        ))}
      </section>
      <Footer />
    </section>
  );
}

export default App;