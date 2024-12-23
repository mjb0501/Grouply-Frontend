import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './context/authContextProvider.tsx';
import { AuthContext } from './context/authContext.ts'
import Homepage from './pages/Homepage.tsx';
import Register from './pages/Register.tsx';
import Login from './pages/Login.tsx';

import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> 
        </Routes>
      </Router>
    </AuthProvider>
  );
}

const NavBar = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      {!auth ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  )
}

export default App
