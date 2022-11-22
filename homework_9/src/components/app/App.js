import Footer from '../footer/footer';
import Header from '../header/header';
import Main from '../main/main';
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
