import './priceCard.css';
import {motion, AnimatePresence} from 'framer-motion';
import {useState} from 'react';

const PriceCard = props => {
  const {title = 'click me', children} = props;

  const [isVisible, setVisible] = useState(false);

  const handleVisibility = () => setVisible(!isVisible);

  return (
    <>
      <div onClick={handleVisibility} className="div_click">
        {title}
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{height: 0, opacity: 0}}
            animate={{height: 'auto', opacity: 1}}
            exit={{height: 0, opacity: 0}}
            style={{overflow: 'hidden'}}
            transition={{duration: 0.5}}>
            <div className="div_vivble">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PriceCard;
