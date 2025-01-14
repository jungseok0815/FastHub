
import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './page/login/loginMain';
import Main from './page/main/main';
import Manager from './page/manager/Manager';

function App() {
  return (
    <div className="App">
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/Manager' element={<Manager/>}/>
            </Routes>
          </BrowserRouter>  
        </div>
    </div>
  );
}

export default App;