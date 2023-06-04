import './actions-list.css';

import Action from '../action/Action';
import {action} from './../helpers/action/actionList.js';

const ActionList = () => {
  return (
    <div className='service'>
      <h2 className='service_text'> Наши действия после вашего вывозва </h2>
      <div className='service_content'>
        {action.map((action, index) => {
          return (
            <Action
              key={index}
              img={action.img}
              bg={action.bg}
              h3={action.h3}
              p={action.p}
              num={action.num}
              item={action.item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ActionList;
