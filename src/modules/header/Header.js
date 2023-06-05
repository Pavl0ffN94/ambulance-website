import ActionList from '../actions-list/ActionsList';
import Button from '../btn/Button';
import medHeader from './../../img/ambasador.png';
import ekg from './../../img/ekg.svg';

import './header.css';
const Header = () => {
  return (
    <>
      <div className='container'>
        <div className='hedader_left'>
          <div className='header__text'>
            <div className='heder_title'>
              <h1>
                Скорая помощь: <br /> оперативно и эффективно.
              </h1>
            </div>
            <div className='header__text'>
              <p>
                Скорая помощь <strong> 24/7:</strong> мы всегда на связи и готовы прибыть
                в любое время суток для оказание неотложной <br /> <br />
                медицинской помощи.
              </p>
            </div>
          </div>
          <div className='btn_phone min'>
            <Button />
          </div>
          <div className='phone_big_v max'>
            <h2>
              <strong>+7(846)333-0-333</strong>
              <br />
              <strong>+7(846)991-03-03</strong>
            </h2>
            <br />
            <p>Телефоны скорой помощи</p>
          </div>
        </div>

        <img className='header_img' src={medHeader} alt='header med' />
        <img className='header_ekg' src={ekg} alt='ekg' />
      </div>
      <ActionList />
    </>
  );
};

export default Header;
