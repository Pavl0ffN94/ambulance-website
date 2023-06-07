import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './style/style.css';

import Header from './modules/header/Header';
import Nav from './modules/nav/Nav';
import Footer from './modules/footer/Footer';
import Equipment from './modules/equipment/Equipment';
import PersonList from './modules/personList/PersonList';
import Consultation from './modules/consultation/Сonsultation';
import PriceList from './modules/priseList/PriceList';
import Contacts from './modules/contacts/Contacts';
import Licinse from './modules/license/Licinse';

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />

        {/* <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/PriceList' element={<PriceList />} />
          <Route path='/Equipment' element={<Equipment />} />
          <Route path='/PersonList' element={<PersonList />} />
          <Route path='/Contacts' element={<Contacts />} />
          <Route path='/Consultation' element={<Consultation />} />
        </Routes> */}
        <Licinse />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
