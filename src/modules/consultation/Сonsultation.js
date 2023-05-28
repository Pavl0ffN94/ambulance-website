import './consultation.css';
import consDok from './../../img/consDock.svg';

const Consultation = () => {
  return (
    <div className='consultation_wrapper'>
      <div className='consultation_content'>
        <img src={consDok} alt='consultation-doctor' className='consultation_img' />
        <h2 className='content_title'>Отправьте ваш отзыв</h2>
        <p className='constnt_text'>
          Мы постоянно работаем над улучшением нашего сервиса
        </p>
        <form className='form'>
          <input href='!#' placeholder='Имя' className='content_form' />
          <input href='!#' placeholder='Ваш отзыв' className='content_form' />
          <button type='submit' className='content_btn'>
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Consultation;
