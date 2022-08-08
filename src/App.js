import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Users from './pages/Users';
import Home from './pages/Home';
import Login from './pages/Login';
import {useSelector} from 'react-redux'
import NotFound from './pages/NotFound';
import Perfil from './pages/Perfil';


function App() {
  
 const user = useSelector(state => state.user)

 console.log(user)
 
  return (
    <div className="App">
      {!user.user? <Login/> :
      <Router>
      <Layout>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/perfil' element={<Perfil/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </Layout>
      </Router>
      }
 
    </div>
  );
}

export default App;
