import React, { useContext, useState } from 'react';
import AuthContext from '../authContext/AUthContext';

function SignIn() {
  const [showSignup, setShowSignup] = useState(false);

  const auth = useContext(AuthContext);

  const onFormSubmit = (e) => {
    e.preventDefault();
    auth.login();
  };

  if (auth.isLoggedIn) {
    return <div>already logged in</div>;
  }

  return (
    <form
      onSubmit={onFormSubmit}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      {showSignup && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '250px',
            margin: '20px 0px 0px'
          }}
        >
          <label name="name">name</label>
          <input type="text" placeholder="name"></input>
        </div>
      )}
      <div
        style={{ display: 'flex', justifyContent: 'space-between', width: '250px', margin: '20px' }}
      >
        <label name="email">email</label>
        <input type="text" placeholder="email"></input>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '250px',
          margin: '0px 0px 20px'
        }}
      >
        <label name="password">password</label>
        <input type="password" placeholder="password"></input>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
        <button type="submit">{showSignup ? 'sign up' : 'login'}</button>
        <button type="button" onClick={() => setShowSignup((prev) => !prev)}>
          {showSignup ? 'sign in' : 'sign up'}
        </button>
      </div>
    </form>
  );
}

export default SignIn;
