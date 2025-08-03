import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap'; 
import {UserProvider} from './UserContext';
import {useState, useEffect} from 'react';


// Pages
import Home from './pages/Home';

// Components
import AppNavBar from './components/AppNavBar';
import Tools from './components/Tools';
import Footer from './components/Footer';

function App() {

  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  });

  const unsetUser = () => {
    localStorage.clear();
    setUser({
      id:null,
      isAdmin: null
    });
  }

  useEffect(() => {
  const fetchUser = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });

        const data = await res.json(); // ✅ Parse the actual data

        if (!data._id) {
          setUser({ id: null, isAdmin: null });
        } else {
          setUser({ id: data._id, isAdmin: data.isAdmin });
        }

      } catch (err) {
        console.error('Error fetching user details:', err);
        setUser({ id: null, isAdmin: null });
      }
    } else {
      setUser({ id: null, isAdmin: null });
    }
  };

  fetchUser(); // ✅ Call the async function inside useEffect
}, []);


  return (
    <>
    <UserProvider value = {{user, setUser, unsetUser}}>
      <Router>
        <AppNavBar/>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/#tools" element={<Tools/>} />
            <Route path="/#footer" element={<Footer/>}/> 
          </Routes>
        </Container>
      </Router>
    </UserProvider>
    </>
    )
}

export default App;
