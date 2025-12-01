import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import AddTask from "./components/AddTask"
import './App.css'
import Login from './components/Login';
import Register from './components/Register';
import Add_item from './components/Add_item';
import Billing from './components/Billing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
       <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/regsiter' element={<Register/>}></Route>
        <Route path='/add_item' element={<Add_item/>}></Route>
        <Route path='/billing' element={<Billing/>}></Route>
       </Routes>
     </Router>
    </>
  )
}

export default App
