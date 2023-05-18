import './nav.css';
import logo from './../../img/logo.svg';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-row">
          <img src={logo} alt="logo-ambulance" className="logo" />

          <ul className="nav-list">
            <li className="nav-list__item">Услуги</li>
            <li className="nav-list__item">Оборудование</li>
            <li className="nav-list__item">Специалисты</li>
            <li className="nav-list__item">Пациентам</li>
            <li className="nav-list__item">Контакты</li>
          </ul>
          <div className="nav_text">
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
