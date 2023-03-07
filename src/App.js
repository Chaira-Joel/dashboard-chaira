import './App.css';
import Home from './Components/Home'
import {Routes, Route} from "react-router-dom";
import StudentProfile from "./Components/StudentProfile";
import NavBar from "./Components/NavBar";
import About   from "./Components/About"
import Footer from "./Components/Footer";
import Header  from "./Components/Header"
import Contact from './Components/Contact'


function App() {
  return (
    <div className="App">
        <Header></Header>
        <NavBar/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/:name" element={<StudentProfile/> }/>
            <Route path="/:contact" element={<Contact/> }/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
