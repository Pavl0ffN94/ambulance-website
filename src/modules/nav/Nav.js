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
              <li className='nav-list__item'>Отзыв</li>
            </NavLink>
          </ul>
          <div className='nav_text'>
            <h2>
              <strong>+7(846)333-0-333</strong>
            </h2>
            <p>Телефон скорой помощи</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
