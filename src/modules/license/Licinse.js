import licenseImg from './licenseImg';
import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import './license.css';

const Licinse = () => {
  const [imgSelect, setImgSelect] = useState(null);
  return (
    <div className='license_container'>
      <div className='license_img'>
        {licenseImg.map(item => {
          return (
            <>
              <motion.div>
                <img
                  key={item.id}
                  onClick={setImgSelect(item.id)}
                  className='img_item'
                  src={item.img}
                  alt='license ambulance'
                />
              </motion.div>
              <AnimatePresence>
                {imgSelect && (
                  <motion.div>
                    layoutId={item.id}
                    <motion.button onClick={() => setImgSelect(null)} />
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          );
        })}
      </div>
      <div className='license_text'>
        <p>
          ООО «Самарская скорая» г. Самара, пр. К. Маркса 185 Лицензия №ЛО-63-01-003669 от
          29.04.16 ИНН/КПП 6318006157/631801001 р\с 40702810000030002279 в ф-ле
          "Самарский" ОАО "Альфа-Банк" г. Самара к\с 30101810600000000964 БИК 043601964
          ОКПО 14551258
        </p>
      </div>
    </div>
  );
};

export default Licinse;
