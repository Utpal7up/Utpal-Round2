import React from "react";
import './App.css';
import Employee from "./components/Employee";
import EmployeeList from "./components/EmployeeList";
import FindEmployee from "./components/FindEmployee";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Employee />
        <EmployeeList />
        <FindEmployee />
      </div>
    </Router>
  );
}

export default App;
