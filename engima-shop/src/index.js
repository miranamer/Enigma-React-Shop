import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/Javanese_Text.ttf';
import './fonts/JejuGothic-Regular.ttf';
import './fonts/JetBrainsMono-Bold.ttf';
import './fonts/JetBrainsMonoNL-Regular.ttf';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

