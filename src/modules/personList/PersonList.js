import Person from '../person/Person';
import './personList.css';
import {personArr} from '../helpers/personList';

const PersonList = () => {
  return (
    <div className="list_wrapper">
      {personArr.map((el, i) => {
        return <Person key={i} name={el.name} post={el.post} img={el.img} exp={el.exp} />;
      })}
    </div>
  );
};

export default PersonList;
