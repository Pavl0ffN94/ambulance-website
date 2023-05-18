import Person from '../person/Person';
import './personList.css';
import {personArr} from '../helpers/personList';
import {useState} from 'react'

const PersonList = () => {
  const [page, setPage] = useState(1);
  const pageSize = 3;

  return (
    <div className="list_wrapper">
      {personArr.slice((page - 1) * pageSize, pageSize * page).map((el, i) => {
        return (
          <Person
            key={i}
            name={el.name}
            post={el.post}
            img={el.img}
            exp={el.exp}
          />
        );
      })}
      <button disabled={page <= 1} onClick={() => setPage((prev) => prev - 1)}>
        Backward
      </button>
      <button
        disabled={personArr.length / pageSize <= page}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Forward
      </button>
    </div>
  );
};

export default PersonList;