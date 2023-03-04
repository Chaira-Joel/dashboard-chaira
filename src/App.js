import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from './Components/Home'
import {Routes, Route} from "react-router-dom";
import Students from "./Components/Students";
import StudentProfile from "./Components/StudentProfile";


function App() {
  return (
    <div className="App">
<Routes>
    <Route path="/" element={<Students />}/>
    <Route path ="/students/:id" element={<StudentProfile/>}/>
</Routes>
      <Header/>
        <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
