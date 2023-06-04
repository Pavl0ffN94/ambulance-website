import Person from '../person/Person';
import './personList.css';
import {personArr} from '../helpers/personList';
import {useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion';

const PersonList = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel);

    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}}>
      <motion.div
        drag='x'
        dragConstraints={{right: 0, left: -width}}
        className='inner_carousel'>
        {personArr.map(person => {
          return (
            <motion.div className='item' key={person.id}>
              <Person
                name={person.name}
                img={person.img}
                exp={person.post}
                post={person.exp}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default PersonList;
