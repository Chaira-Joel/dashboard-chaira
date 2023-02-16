import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Checkboxes from "./Components/Checboxes";
import Barchart from "./Components/Barchart";
import Table from "./Components/Table";
import StudentData from "./StudentData/StudentData";
import HomePage from './Components/Home'

function App() {
  return (
    <div className="App">

      <Header/>
        <HomePage/>
        <Checkboxes/>
        <Barchart/>
        <Table/>
        <StudentData/>
      <Footer/>
    </div>
  );
}

export default App;
