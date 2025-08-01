import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "leaflet/dist/leaflet.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Mapview from './components/Mapview.jsx';
import DetailsPAge from './components/DetailsPAge.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mapview/>} />
      <Route path="/:lat/:lng/:option" element={<DetailsPAge/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
