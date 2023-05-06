import './style/style.css';

import Header from './modules/header/Header';
import Nav from './modules/nav/Nav';
import Footer from './modules/footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
