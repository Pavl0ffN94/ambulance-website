import {NavLink} from 'react-router-dom';
import logo from './../../img/logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='logo'>
        <img src={logo} alt='ambulance car' />
      </div>
      <div className='footer_contacts'>
        <ul className='contacts'>
          <NavLink to='/'>
            <li className='foter_link'>Главная</li>
          </NavLink>

          <NavLink to='./PriceList'>
            <li className='foter_link'>Услуги</li>
          </NavLink>

          <NavLink to='/Contacts'>
            <li className='foter_link'>Контакты</li>
          </NavLink>

          <NavLink to='/Contacts'>
            <li className='foter_link'>Лицензия</li>
          </NavLink>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
