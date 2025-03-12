import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from './Todo.js';
import Contact from './Contact.js';
import Navbar from './Navbar.js';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Ready to Do your To-Do's?</h1>} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};



export default App;
