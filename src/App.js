import './App.css';

import Home from './Components/Home'
import {Routes, Route} from "react-router-dom";
import StudentProfile from "./Components/StudentProfile";
import NavBar from "./Components/NavBar";
import About   from "./Components/About"




function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/:name" element={<StudentProfile/> }/>
        </Routes>


    </div>
  );
}

export default App;
