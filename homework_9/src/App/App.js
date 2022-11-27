import Header from '../Components/Header/header';
import Main from '../Pages/Main/main';
import Footer from '../Components/Footer/footer';

import './App.css';

function App() {
  return (
    <div className = "container"> 
      <div className = 'main-part'>
        <Header />
        <Main />
      </div>
        <Footer />
    </div>
  );
}

export default App;
