import './style/style.css';

import Header from './modules/header/Header';
import Nav from './modules/nav/Nav';
import Footer from './modules/footer/Footer';
import Service from './modules/servic/Service';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
