import './action.css';

const Action = ({img, bg, h3, p, num, item}) => {
  return (
    <div className="content_item">
      <div className="item_img">
        <img src={img} alt={h3} />
      </div>
      <div className={bg}>
        <div className="item_text">
          <h3> {h3}</h3>
          <p className="item_p">{p}</p>
          <div className={num}>
            <p> {item} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
