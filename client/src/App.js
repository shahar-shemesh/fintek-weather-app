import classes from './App.module.css';
import Header from './components/Header/Header';
import WeatherDisplay from './components/Weather/WeatherDisplay';
import Footer from './components/Footer/Footer';


export default function App() {

  return (

    <main className={classes.mainContent}>

      <Header />

      <WeatherDisplay />

      <Footer />

    </main>

  );
};
