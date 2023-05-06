import Button from '../btn/Button';
import logo from './../../img/logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_logo">
        <img src={logo} alt="logo" className="footer_logo" />
      </div>
      <div className="footer_contacts">
        <ul>
          <li>Главная</li>
          <li>Услуги</li>
          <li>Оборудование</li>
          <li>Специалист</li>
          <li>Пациентам</li>
        </ul>
      </div>
      <Button />
    </footer>
  );
};

export default Footer;
