import './consultation.css';
import consDok from './../../img/consDock.svg';

const Consultation = () => {
  return (
    <div className="consultation_wrapper">
      <h2 className="consultation_title">Специальное предложение</h2>

      <div className="consultation_content">
        <img src={consDok} alt="consultation-doctor" className="consultation_img" />
        <h2 className="content_title">Получить бесплатную консультацию</h2>
        <p className="constnt_text">
          Наши специалисты прокансультируют вас по любым вопросам
        </p>
        <form className="form">
          <a placeholder="Имя" className="content_form" />
          <a placeholder="Номер телефона" className="content_form" />
          <button type="submit" className="content_btn">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Consultation;
