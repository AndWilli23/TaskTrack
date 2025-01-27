import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import App from './page/components/App.jsx'
import Cabecalho from './layout/cabecalho.jsx'
import Calendario from './Calendario.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>
        <Route path={"/"} element={<App/>}/>
        <Route path={"ToDoList"} element={""}/>
        <Route path={"/Calendario"} element={<Calendario/>}/>
    </Routes>
  </BrowserRouter>
)
