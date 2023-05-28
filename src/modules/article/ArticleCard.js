import './article.css';
import {motion, AnimatePresence} from 'framer-motion';
import {useState} from 'react';

const ArticleCard = props => {
  const {title = 'click me', children} = props;

  const [isVisible, setVisible] = useState(false);

  const handleVisibility = () => setVisible(!isVisible);

  return (
    <div className='card_wrapper'>
      <motion.button
        style={{overflow: 'hidden'}}
        onClick={handleVisibility}
        className='btn_click'>
        {title}
      </motion.button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{height: 0, opacity: 0}}
            animate={{height: 'auto', opacity: [0, 1], scale: 1}}
            exit={{height: 0, opacity: [1, 0], scale: 0}}
            transition={{duration: 0.3, type: 'keyframes'}}>
            <div className='article_visible'>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArticleCard;
