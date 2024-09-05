import classes from './Header.module.css';
import logo from '../../assets/logo.svg'

const Header = () => {

  return (
    <header className={classes.header}>
      <span className={classes.logo}>
        <img src={logo} alt="Fintek Weather App Logo" />
      </span>
    </header>
  );
};


export default Header;