import './App.css';
import { useState } from 'react';
import PriceTracker from './components/PriceTracker';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Card from './components/Card';

const tokens = [
  { name: 'Enjin MFT', collection: 'Enjin Collection', type: 'Metaverse', imageUrl: 'https://openseauserdata.com/files/34a76f843b3470272726fabe515eccba.jpg', link: 'https://nft.io/asset/3312-127605887595351928871620098057039773696' },
  { name: 'The Green Box', collection: 'Green Box by Maxim', type: 'Metaverse', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/f18b934aeda7301560809bf002be0eb2bcb8316db01baec1418ee4c97aee4d00.png', link: 'https://nft.io/collection/green-box-by-maxim/' },
  { name: 'Degens', collection: 'Degens', type: 'Avatars', imageUrl: 'https://platform.production.enjinusercontent.com/enterprise/degens/assets/media/29.png', link: '#' },

  { name: 'Priceless Binance Hoodie', collection: 'Binance', type: 'Metaverse', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/67d254c8ee72edcb151789f7fc44dfa718c637fa5fbcebf5da444bd7e5bc4525.png', link: 'https://nft.io/asset/3363-149870456524749265407774008994990915585' },
  { name: 'Exclusive Binance Hoodie', collection: 'Binance', type: 'Metaverse', imageUrl: 'https://cdn.enjinx.io/metadata/raw/37cc6eb9e2174243e125786b97aa1787f187639b/01ac96107b8e5a3477034161fbdefddb4fb28286.png', link: '#' },
  { name: 'Iconic Binance Hoodie', collection: 'Binance', type: 'Metaverse', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/aa1b96178ba14b57be1802052f40538ea6aba4275dd6f65cf5530043b695e257.png', link: 'https://nft.io/asset/3363-149870456524749265518454473437248225507' },
  
  { name: 'Imperial Sovereign', collection: 'The Etherscape', type: 'Memberships', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/cc624a9397569e36883d97c5f19a638b4e490f63dd0bddb65b9332111ec16b28.png', link: 'https://nft.io/asset/2100-1' },
  { name: 'Founders Token ENJ Beam Club', collection: 'ENJ Beam Club', type: 'Memberships', imageUrl: 'https://nft.production.enjinusercontent.com/uploads/files/5fijlg0p5nx88r67.png', link: 'https://nft.io/asset/2190-7' },
  { name: 'Tipper Token', collection: 'NFT Tipper (Bot)', type: 'Memberships', imageUrl: 'https://nft.production.enjinusercontent.com/uploads/files/tzk5om2pvhpw8cbj.jpg', link: 'https://nft.io/asset/2479-9' },
  
  { name: 'Epochrome Sword', collection: 'The Multiverse', type: 'Metaverse', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/9a1752e040920a53ee6cbb8c585c6a85da87f8fa6f20c16e37d8cb24f14ac385.jpg', link: 'https://nft.io/asset/2967-107002853660685728525072975374659358631' },
  { name: 'Starbow', collection: 'The Multiverse', type: 'Metaverse', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/5b3c74aba4d392e2665e2f911210a4a600ee3ec8780f44bbf4cd05f4bd39d12c.jpeg', link: 'https://nft.io/asset/2967-107002853660685760308813014376216789618' },
  { name: 'APG-M55', collection: 'The Multiverse', type: 'Metaverse', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/9b9c766dba960c17a0b114dd68ad005d5f0f4c5c6d0ccf774a967dd93fb5f873.jpg', link: 'https://nft.io/asset/2967-107002853660685728561966463522078458491' },
  { name: 'Oindrasdin', collection: 'The Multiverse', type: 'Metaverse', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/2b8402c0b3a2c7a78a3579d4e8c7fbe045aa448b4964e547b6efed7e4118f431.jpg', link: 'https://nft.io/asset/2967-107002853660685728488179487227240255171' },
  { name: 'ForgeHammer', collection: 'The Multiverse', type: 'Metaverse', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/f1f42d0fc10cd1f89fcfabba95acd5ca5477162e9551f5ba3c85f5effa50f45c.jpg', link: 'https://nft.io/asset/2967-107002853660685728543519719448368909321' },
  { name: 'Soulshift Armor', collection: 'The Multiverse', type: 'Metaverse', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/23d9054c219b1f310f809161dd930f0ad3882ee73f2d8b8e34268735c54e2b4b.jpg', link: 'https://nft.io/asset/2967-107002853660685728598859951669497561717' },
  { name: 'Stormwall', collection: 'The Multiverse', type: 'Metaverse', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/006d26a8479356fddae2b76170baf51d04e2d663f851f09ba975780f0d6d7577.jpg', link: 'https://nft.io/asset/2967-107002853660685728580413207595788010096' },
  { name: 'Aeonclipse Key', collection: 'The Multiverse', type: 'Metaverse', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/807f05cd0ae3dd6ca57ae56a6dfec3fce0ea66286a30043e27f99b4d59ce128d.jpg', link: 'https://nft.io/asset/2967-106338239662793274425543839176105918464' },
  { name: 'Archspire', collection: 'The Multiverse', type: 'Metaverse', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/395a0e11130e05ef0c3e751baa8ff2690c904f04eca0d9e287bc5a80eafb739d.jpg', link: 'https://nft.io/asset/2967-106338239662793273447866403269499682816' },

  { name: 'The N-Chip', collection: 'Enjin Collection', type: 'Commemorative', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/433533c0d1058c547c35322124b57613e643e3a13d1137ca0f0c8056a043d4bb.png', link: 'https://nft.io/asset/3312-149870456524749471531692288625520682901' },
  { name: 'Enjin Website Builder Service Medal', collection: 'Enjin Website Builder Service Medal', type: 'Commemorative', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/3c83e2a693a068eb35bb2e19e6f68ae2d1075e2e569e23a6c4f6e0d01c5621c9.gif', link: 'https://nft.io/collection/enjin-website-builder-service-medal/' },
  { name: 'Enjin Wallet 2.0 Beta Tester Badge', collection: 'Enjin Collection', type: 'Commemorative', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/601be4206b4e32a39d2d86ed1b82d120fa6aeabef524a300be582113a3d173ab.gif', link: 'https://nft.io/asset/3312-149870456524749507742650905317370513202' },
  { name: 'EnjinX Launch Token', collection: 'Enjin Collection', type: 'Commemorative', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/de1335aee52e0c05c59dfb768c3cb4a1e4e6acfd1a7fbeab0176fae035197a01.jpg', link: 'https://nft.io/asset/3312-148873535527910585457518669488281616384' },

  { name: 'Rakku, Mecha Clan Shockslinger', collection: '#MyFirstNFT', type: 'Avatars', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/d1010448b3c61556a88ef787c2027d8005c29a75998e0712db371120c2036153.gif', link: 'https://nft.io/asset/3044-160504280491028834688987873652194148353' },
  { name: 'Thresh, Mecha Clan Bounty Hunter', collection: '#MyFirstNFT', type: 'Avatars', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/badb13912192394e16bbc8a0f9b9f7d675677f67eaf5a0215fed1478af948a9b.gif', link: 'https://nft.io/asset/3044-160504280491028834670541129578484596741' },
  { name: 'Pyjama Clan Warrior', collection: '#MyFirstNFT', type: 'Avatars', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/89fa4b8a7931400dbe8d1d9d6f4266400d359c581d85cec6e395de5840b35280.gif', link: 'https://nft.io/asset/3044-160504280491028834652094385504775045145' },
  { name: 'Pyjama Clan Apprentice', collection: '#MyFirstNFT', type: 'Avatars', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/c6c1cef2e5e62a4cf3a8484da1678123d376caa6a56d43231868acb1a0670543.gif', link: 'https://nft.io/asset/3044-160504280491028834633647641431065493919' },
  
  { name: 'Grumpy Generation', collection: 'Grumpy Generation', type: 'Avatars', imageUrl: 'https://nft.production.enjinusercontent.com/metadata/enjin/media/cac11e6bd4af6e390756285de2c921bd73404c69c54805d07c8e5bfc2e35a610.png', link: 'https://nft.io/collection/grumpy-generation' },
  { name: 'Enjels', collection: 'Enjels', type: 'Avatars', imageUrl: 'https://nft.production.enjinusercontent.com/uploads/images/cmozhphqcqbx3yns.png', link: 'https://nft.io/collection/enjels' },
];

function App() {
  const [currentFilter, setCurrentFilter] = useState('All');

  const handleFilterChange = (filterName: string) => {
    setCurrentFilter(filterName);
  };  
  
  const Tokens = currentFilter === 'All'
    ? tokens
    : tokens.filter(token => token.type === currentFilter);

  return (
    <section className="App">
      <header>
        <h1>Explore NFTs</h1>
        <PriceTracker />
      </header>
      <Nav onNavLinkClick={handleFilterChange} />
      <section className="cardContainer">
      {Tokens.length > 0 ? (
        Tokens.map((token, index) => (
          <Card
            key={index}
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
