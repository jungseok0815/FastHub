
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './page/login/loginMain';
import Main from './page/main/main';
import Manager from './page/manager/Manager';
import ProductItemCard from './componets/manager/productManager/ProductItemCard';
import PrivateMasterRoute from './Route/PrivateMasterRoute';
import { AuthProvider } from './config/Context/UserContext'; 

function App() {

  return (
      <div className="App">
          <div>
            <AuthProvider>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Main/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/test' element={<ProductItemCard/>}/>
                  <Route path='/admin' element={<PrivateMasterRoute component={<Manager />}/>}/>
                  </Routes>
              </BrowserRouter>  
            </AuthProvider>
          </div>
      </div>
   
  );
}

export default App;