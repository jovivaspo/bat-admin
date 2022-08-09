import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Users from './pages/Users';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Perfil from './pages/Perfil';
import { useSelector, useDispatch } from 'react-redux';
import NotVerified from './pages/NotVerified';
import Layout from './components/Layout';
import { useEffect } from 'react';
import { getUser } from './redux/reducers/userReducer';


function App() {

  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const verified = user?.user.verified || null
  const id = user?.user._id || null
  const token = user?.token
  const email = user?.user.email || null

  useEffect(() => {
    const loadUser = async () => {
      dispatch(getUser({ id, token }))
        .unwrap()
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    }
    if (user) {
      loadUser()
    }
  }, [])

  return (
    <div className="App">
      {!user && <Login />}
      {user && verified === 'Verified' &&
        (<Router>
          <Layout>
            <Routes>
              <Route path='/' element={<Home user={user} />} />
              <Route path='/users' element={<Users />} />
              <Route path='/perfil' element={<Perfil user={user} />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>)
      }
      {user && verified === 'Not Verified' && <NotVerified email={email} />}

    </div>
  );
}

export default App;
