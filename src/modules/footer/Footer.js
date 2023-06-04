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
          <li>Главная</li>
          <li>Услуги</li>
          <li>Оборудование</li>
          <li>Специалист</li>
          <li>Пациентам</li>
        </ul>
      </div>
      <div className='additional_phone'>
        <p className='phone'>
          Доп номер <br /> +7 (846) 991-03-03
        </p>
      </div>
    </footer>
  );
};

export default Footer;
