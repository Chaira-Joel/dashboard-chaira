import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from './Components/Home'
import {Routes, Route} from "react-router-dom";
import Students from "./Components/Students";
import StudentProfile from "./Components/StudentProfile";
import studentDataArray from "./StudentData/Data";


function App() {
  return (
    <div className="App">

{/*<Routes>*/}
{/*    <Route path="/" element={<Students />}/>*/}
{/*    <Route path="/students/:id" element={<StudentProfile />} />*/}
{/*</Routes>*/}
      <Header/>
        <Home/>
      <Footer/>

    </div>
  );
}

export default App;
