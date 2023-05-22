import './person.css';

const Person = ({name, exp, post, img}) => {
  return (
    <div className='person_wrapper'>
      <div className='person_img'>
        <img src={img} alt={name} />
      </div>
      <div className='person_text'>
        <h2 className='person_name'> {name} </h2>
        <p className='person_post'>
          <strong> {post} </strong>
        </p>
        <p className='person_exp'> {exp} </p>
      </div>
    </div>
  );
};

export default Person;
