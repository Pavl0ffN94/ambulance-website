import './style/style.css';

import Header from './modules/header/Header';
import Nav from './modules/nav/Nav';
import ActionsList from './modules/actions-list/ActionsList';
import Footer from './modules/footer/Footer';
import Equipment from './modules/equipment/Equipment';

function App() {
  return (
    <div className="App">
      <Nav />
      {/*  <Header /> */}
      <ActionsList />
      {/*  <Equipment /> */}
      <Footer />
    </div>
  );
}

export default App;
