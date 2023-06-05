import './nav.css';
import logo from './../../img/logo.svg';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav-container'>
        <div className='nav-row'>
          <NavLink to='/'>
            <img src={logo} alt='logo-ambulance' className='logo' />
          </NavLink>
          <ul className='nav-list'>
            <NavLink to='/'>
              <li className='nav-list__item'>Главная</li>
            </NavLink>

            <NavLink to='./PriceList'>
              <li className='nav-list__item'>Услуги</li>
            </NavLink>

            <NavLink to='./Equipment'>
              <li className='nav-list__item'>Оборудование</li>
            </NavLink>
            <NavLink to='PersonList'>
              <li className='nav-list__item'>Специалисты</li>
            </NavLink>

            <NavLink to='/Contacts'>
              <li className='nav-list__item'>Контакты</li>
            </NavLink>

            <NavLink to='./Consultation'>
              <li className='nav-list__item'> Оставить отзыв</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
