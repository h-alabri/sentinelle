import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthContext } from './hooks/useAuthContext';

// pages & components
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';

function App() {
  const { user } = useAuthContext();

  useEffect(() => {
    // Fetch credentials example
    const fetchCredentials = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/credentials`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Add other headers as needed
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Handle your data here
        console.log(data);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    };

    if (user) {
      fetchCredentials();
    }

    // Fetch user example
    const fetchUser = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user`, {
          headers: {
            'Authorization': `Bearer ${user?.token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        const userData = await response.json();
        // Handle your user data here
        console.log(userData);
      } catch (error) {
        console.error('There has been a problem fetching user data:', error);
      }
    };

    if (user) {
      fetchUser();
    }
  }, [user]); // Only re-run the effect if `user` changes

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
            <Route 
              path="/homepage" 
              element={!user ? <Homepage /> : <Navigate to="/" />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
