import './priceCard.css';
import {motion, AnimatePresence} from 'framer-motion';
import {useState} from 'react';

const PriceCard = props => {
  const {title = 'click me', children} = props;

  const [isVisible, setVisible] = useState(false);

  const handleVisibility = () => setVisible(!isVisible);

  return (
    <div className='card_wrapper'> 
      <motion.button 
       style={{overflow: 'hidden'}}
       onClick={handleVisibility}
       className="div_click">
        {title}
      </motion.button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{height: 0, opacity: 0}}
            animate={{height: 'auto', opacity: [0, 1], scale: [0, 1]}}
            exit={{height: 0, opacity: [1, 0], scale: [1, 0]}}
            transition={{duration: 0.3, type:'keyframes'}}>

            <div className="div_visible">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
  );
};

export default PriceCard;
