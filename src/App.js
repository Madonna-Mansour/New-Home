// import { Carousel } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './componente/Header'
import Carouse from './componente/Carouse'
import Cards from './componente/Cards'
// import CardsTOW from './componente/CardsTOW'
import ButtonRegl from './componente/ButtonRegl'
import Header from './componente/Header' 
import SlideOne from './componente/SlideOne' 
import SlideTwo from './componente/SlideTwo'
import SlideThree from './componente/SlideThree';
import SlidFour from './componente/SlidFour';
import SlidFive from './componente/SlideFive';
import SlideSix from './componente/SlideSix';
import SlideSixCarousel from './componente/SlideSixCarousel';
import SlideSeven from './componente/SlideSeven';
import SlideEate from './componente/SlideEate';
import Footer from './Footer';


function App() {
 
  return (
    <div className="App">
        <Header />
        <Carouse />
        <Cards />
        <ButtonRegl  title="Browse More Properties" />
        <SlideOne />
        <SlideTwo />
        <SlideThree />
        <SlidFour />
        <SlidFive />
        <SlideSix />
        <SlideSixCarousel />
        <SlideSeven />

        <SlideEate />
        <Footer />


    </div>
  );
}

export default App;
