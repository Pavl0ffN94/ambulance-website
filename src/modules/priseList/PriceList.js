import './priceList.css';
import PriceCard from '../priceCard/PriceCard';
import {pricelistArr} from './../helpers/priceList.js';

const PriceList = () => {
    return ( 
  <div className='person_list-wrapper'>
   { pricelistArr.map(list => {
      return (
        <PriceCard key={list.id} title={list.title}>
          <div className='text_1' > 
          {list.children1}
          <strong>  
          {list.cost1}
          </strong>
          </div>
          <div className='text_2' > 
           {list.children2}
           <strong>  
          {list.cost2 }
           </strong>
          </div>
        </PriceCard>
      )}
    )}
     </div>)
  
};

export default PriceList;
