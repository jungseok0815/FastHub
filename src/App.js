
import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './page/login/login';

function App() {
  return (
    <div className="App">
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login/>}/>
            </Routes>
          </BrowserRouter>  
        </div>
    </div>
  );
}

export default App;