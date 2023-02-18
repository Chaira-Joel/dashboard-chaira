import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Data from "./StudentData/Data";
import HomePage from './Components/Home'


function App() {
  return (
    <div className="App">

      <Header/>
        <HomePage/>
        <Data/>
      <Footer/>
    </div>
  );
}

export default App;
