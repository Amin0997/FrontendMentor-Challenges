import Header from './components/Header/Header.jsx';
import CardsSection from './components/CardsSection/CardsSection.jsx';
import ClientTestimonials from './components/ClientTestimonials/ClientTestimonials.jsx';
import ImagesSection from './components/ImagesSection/ImagesSection.jsx';
import Footer from './components/Footer/Footer.jsx';

import './styles/reset.css'
import './styles/common.scss'

function App() {
  return (
    <div className="wrapper">

      <Header/>

      <CardsSection/>

      <ClientTestimonials/>

      <ImagesSection/>

    <Footer/>

    </div>
  );
}

export default App;
