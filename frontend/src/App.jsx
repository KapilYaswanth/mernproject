// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import Header from './common/components/Header';
import Places from './places/pages/Places';
import SignIn from './auth/SignIn';
import AuthContext from './authContext/AUthContext';
import { useContext, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout
      }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/:userId/places" element={<Places />} />
          <Route path="/places/:placeId" element={<NewPlace />} />
          <Route path="/auth" element={<SignIn />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
