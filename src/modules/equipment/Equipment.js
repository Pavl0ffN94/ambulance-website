import './equipment.css';

import car from './../../img/сar-park.svg';
import ekg from './../../img/ekg.svg';

const Equipment = () => {
  return (
    <div className="content">
      <h1> Наше оборудование</h1>
      <h2>Наш автопарк</h2>
      <div className="car-park">
        <img src={car} alt="ambulance-auto" />
        <p className="equipment_text">
          Наш автопарк скорой помощи состоит из машин, которые прошли тщательную проверку
          перед каждым выездом и оборудованны всем необходимым для оказания скорой помощи.
          <br />
          Наши машины всегда готовы к экстренным вызовам и быстро доставят вас в больницу
          в любое время суток.
        </p>
      </div>
      <h2>Оснащение бригады СП</h2>
      <div className="brigade">
        <p className="equipment_text">
          Когда вы обращаетесь к нам за скорой помощью, Вы можете быть уверенны, что наша
          команда имеет все необходимое для окозания помощи. Мы оснащены передовыми
          приборами и инструментами для более точной диагностики и лечения, а также
          медикаментами и оборудованием для обеспечения максимальной эффективности и
          комфорта в экстренной ситуациию
        </p>
        <img src={car} alt="ambulance-auto" />
      </div>
      <img className="ekg" src={ekg} alt="ekg" />
    </div>
  );
};

export default Equipment;
