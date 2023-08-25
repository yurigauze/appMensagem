import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';  

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import Chat from './pages/chat';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Login} />
          <Route path='/chat' Component={Chat} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
