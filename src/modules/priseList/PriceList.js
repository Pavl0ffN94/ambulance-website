import './priceList.css';
import PriceCard from '../priceCard/PriceCard';
import {pricelistArr} from './../helpers/priceList.js';

const PriceList = () => {
  return pricelistArr.map(list => {
    return (
      <PriceCard key={list.id} title={list.title}>
        {list.children1}, <br /> <br /> {(list.children2 = '')}
      </PriceCard>
    );
  });
};

export default PriceList;
