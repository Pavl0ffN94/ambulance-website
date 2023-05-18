import './style/style.css';

import Header from './modules/header/Header';
import Nav from './modules/nav/Nav';
import ActionsList from './modules/actions-list/ActionsList';
import Footer from './modules/footer/Footer';
import Equipment from './modules/equipment/Equipment';
import PersonList from './modules/personList/PersonList';
import Consultation from './modules/consultation/Сonsultation';
import PriceList from './modules/priseList/PriceList';

function App() {
  return (
    <div className="App">
      <Nav />
    {/*   <Header /> */}
    {/*   <ActionsList /> */}
{/*       <Equipment /> */}
   {/*    <PersonList /> */}
  {/*     <Consultation />  */}
      <PriceList />
      <Footer />
    </div>
  );
}

export default App;
