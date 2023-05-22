import './contacts.css';

const Contacts = () => {
  return (
    <div className='contacts_wrapper'>
      <h1> Контактная информация</h1>
      <div className='content'>
        <div className='map'>
          <iframe
            title='map'
            src='https://yandex.ru/map-widget/v1/?um=constructor%3A9aec04ee614409e1bfb07e7b0701b968a3271d8963ce2849e56fd275d94f0336&amp;source=constructor'
            width='500'
            height='400'
            frameBorder='0'></iframe>
        </div>
        <div className='org_info'>
          <h2> Телефоны для связи </h2>
          <strong>
            <p> +7(846) 333-0-333 </p>
            <br />
            <p> +7(846) 991-03-03 </p>
            <br />
          </strong>

          <div className='contacts_org'>
            <p>
              ООО «Самарская скорая» г. Самара, пр. К. Маркса 185 Лицензия
              №ЛО-63-01-003669 от 29.04.16 ИНН/КПП 6318006157/631801001 р\с
              40702810000030002279 в ф-ле "Самарский" ОАО "Альфа-Банк" г. Самара к\с
              30101810600000000964 БИК 043601964 ОКПО 14551258
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
