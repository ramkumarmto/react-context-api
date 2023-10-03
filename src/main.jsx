import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider, { ThemeContextProvider } from './context/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ContextProvider>
  </React.StrictMode>,

)
