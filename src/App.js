import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Checkboxes from "./Components/Checboxes";
import Barchart from "./Components/Barchart";
import Table from "./Components/Table";
import StudentData from "./StudentData/StudentData";

function App() {
  return (
    <div className="App">

      <Header/>
        <Checkboxes/>
        <Barchart/>
        <Table/>
        <StudentData/>
      <Footer/>
    </div>
  );
}

export default App;
