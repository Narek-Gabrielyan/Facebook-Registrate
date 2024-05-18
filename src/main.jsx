import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { day, month, year } from "./Components/Data.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App day={day} month={month} year={year} />
  </React.StrictMode>
);
