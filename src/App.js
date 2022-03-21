import './App.css';
import CallToAction from './components/CallToAction';
import HeroText from './components/HeroText';
import Navbar from './components/Navbar';
import Perks from './components/Perks';
import ReactPlayer from 'react-player'
import Nifty from './components/Nifty';
import Cap from './components/Cap';
import HowToBuy from './components/HowToBuy';
import Chakra from './components/Chakra';
import PerksDesktop from './components/PerksDesktop';
import HeroDesktop from './components/HeroDesktop';
import Footer from './components/Footer';
import MobileVideo from './components/MobileVideo';
import MetaverseKey from './components/MetaverseKey';
import RoadmapDesktop from './components/RoadmapDesktop';
import RoadmapMobile from './components/RoadmapMobile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroDesktop />
      <HeroText />
      <CallToAction />
      <MobileVideo />
      <PerksDesktop />
      <Perks />
      <Chakra/>
      <MetaverseKey />
      <Chakra />
      <HowToBuy />
      <RoadmapMobile />
      <RoadmapDesktop />
      <Footer />
    </div>
  );
}

export default App;
