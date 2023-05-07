import './service.css';

import siren from './../../img/siren.svg';
import doc from './../../img/doc.svg';
import treatment from './../../img/treatment.svg';
import therapy from './../../img/therapy.svg';
import consultation from './../../img/consultation.svg';

const Service = () => {
  return (
    <div className="service">
      <h2 className="service_text"> Наши действия после вашего вывозва </h2>
      <div className="service_content">
        <div className="content_item">
          <div className="item_img">
            <img src={siren} alt="siren" />
          </div>
          <div className="item_bg-1">
            <div className="item_text">
              <h3> Прибытие бригады на место и оценка состояние больного</h3>
              <p className="item_p">
                Прибытие на место вызова с использованием аварийных сигналов и световых
                маячков
              </p>
              <div className="item_number-1">
                <p> 1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content_item">
          <div className="item_img">
            <img src={doc} alt="siren" />
          </div>
          <div className="item_bg-2">
            <div className="item_text">
              <h3> Осмотр врачом скорой помощи первичная диагностика</h3>
              <p className="item_p">
                Измерение: <br /> АД <br />
                ЭКГ <br />
                Глюкометрия <br /> Измерение O2
              </p>
              <div className="item_number-2">
                <p> 2</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content_item">
          <div className="item_img">
            <img src={treatment} alt="siren" />
          </div>
          <div className="item_bg-3">
            <div className="item_text">
              <h3> Постановка первичного диагноза и начало лечения</h3>
              <p className="item_p">
                назначения для оказание первой помощи
                <br />
                постановка в/м уколов
                <br />
                постановка в/в уколов или системы
              </p>
              <div className="item_number-3">
                <p> 3</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content_item">
          <div className="item_img">
            <img src={therapy} alt="siren" />
          </div>
          <div className="item_bg-4">
            <div className="item_text">
              <h3>Повторная диагностика после оказанной помощи</h3>
              <p className="item_p">
                оценка состояние пациента после оказанного лечения
                <br />
                госпитализация пациента в дежурный стационар (при необходимости)
              </p>
              <div className="item_number-4">
                <p> 4</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content_item">
          <div className="item_img">
            <img src={consultation} alt="siren" />
          </div>
          <div className="item_bg-5">
            <div className="item_text">
              <h3> Советы/рекомедации врача скорой по продолжению лечения</h3>
              <p className="item_p">
                рекомендации к какому специалисту обратиться <br />
                какие анализы сдать <br />
                какие диагностичемкие мероприятия пройти <br />
              </p>

              <div className="item_number-5">
                <p> 5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
