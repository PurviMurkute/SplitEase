import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import AddForm from './components/AddForm.jsx'
import Amount from './components/Amount.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/addform' element={<AddForm/>}></Route>
    <Route path='/amount' element={<Amount/>}></Route>
  </Routes>
  </BrowserRouter>
)
