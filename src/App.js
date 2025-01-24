
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Main from './page/user/userMain/UserMain';
import Admin from './page/admin/AdminMainPage';
import Auth from './page/auth/AuthPage';
import PrivateMasterRoute from './Route/PrivateMasterRoute';
import { AuthProvider } from './stores/context/UserContext'; 

function App() {

  return (
      <div className="App">
          <div>
            <AuthProvider>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Main/>}/>
                  <Route path='/auth' element={<Auth/>}/>
                  <Route path='/admin' element={<PrivateMasterRoute component={<Admin />}/>}/>
                  </Routes>
              </BrowserRouter>  
            </AuthProvider>
          </div>
      </div>
   
  );
}

export default App;