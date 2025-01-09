
import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './page/login/login';
import Main from './page/main/main';


function App() {
  return (
    <div className="App">
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
          </BrowserRouter>  
        </div>
    </div>
  );
}

export default App;