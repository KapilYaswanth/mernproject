import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { useContext } from 'react';
import AuthContext from '../../authContext/AUthContext';

function Header() {
  const auth = useContext(AuthContext);
  return (
    <div className="header">
      <a href="#default" className="logo">
        Your Places
      </a>
      <div className="header-right">
        <Link className="active" to="/">
          ALL USERS
        </Link>
        <Link className="active" to="/u1/places">
          MY PLACES
        </Link>
        <Link className="active" to="/places/new">
          ADD PLACE
        </Link>
        {!auth.isLoggedIn && (
          <Link className="active" to="/auth">
            AUTHENTICATE
          </Link>
        )}
        {auth.isLoggedIn && (
          <a className="active" onClick={auth.logout}>
            LOGOUT
          </a>
        )}
      </div>
    </div>
  );
}

export default Header;
