import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Intro from './components/Intro';
import OurStory from './components/OurStory';
import WeddingDetails from './components/WeddingDetails';
import Gallery from './components/Gallery';
import WelcomeVideo from './components/WelcomeVideo';
import DressCode from './components/DressCode';
import RSVP from './components/RSVP';
import Gifts from './components/Gifts';
import Travel from './components/Travel';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RSVPPage from './pages/RSVPPage';

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Countdown />
      <Intro />
      <OurStory />
      <WeddingDetails />
      <Gallery />
      <WelcomeVideo />
      <DressCode />
      <RSVP />
      <Gifts />
      <Travel />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<RSVPPage />} />
      </Routes>
    </BrowserRouter>
  );
}