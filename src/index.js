// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Make sure the import points to the correct App.js file
// import './components/style.css'; // Import the global CSS file

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
