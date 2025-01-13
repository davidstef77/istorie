import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importă BrowserRouter
import './index.css';
import './App.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Înconjoară aplicația cu BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
