import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import './App.css';
import App from './App.jsx';

// Wrapping the app with BrowserRouter to enable routing
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Wrap the whole app inside BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
