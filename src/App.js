// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PostPage from './components/PostPage';
import FindQuestionsPage from './components/FindQuestionsPage';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1>New Post page</h1>
        <nav>
          <Link to="/">Post</Link> | <Link to="/find-questions">Find Questions</Link>
        </nav>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<PostPage />} />
          <Route path="/find-questions" element={<FindQuestionsPage />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
