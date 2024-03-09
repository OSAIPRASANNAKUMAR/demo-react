import React, { useState } from 'react';
import Home from './Home';
import logo from './gx.png';
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1);
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNext = () => {
    if (email === 'sai@gx.com') {
      setStep(2);
      setErrorMessage('');
    } else {
      setErrorMessage('Incorrect email. Please enter a valid email');
    }
  };

  const handleSignIn = () => {
    if (password === 's123') {
      setLoggedIn(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Incorrect password. Please enter a valid password');
    }
  };

  const handleEmailBack = () => {
    setStep(1);
    setPassword('');
    setErrorMessage('');
  };

  if (loggedIn) {
    return <Home />;
  }

  return (
    <div className="login-container">
      <img
        className='outer-logo'
        src='https://glxcdn.galaxe.com/wp-content/uploads/2024/01/galaxe-solutions-white.svg'
        alt='outer-logo'
      />
      <div className="login-form">
        <img className="login-logo" src={logo} alt="Logo" />
        {step === 1 ? (
          <>
            <h2 className="login-text">Sign In</h2>
            <input
              className="login-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="someone@example.com"
            />
            {errorMessage && <span style={{ color: 'red', marginLeft: '8%' }}>{errorMessage}</span>}<br />
            <a className="recover" href="recover.html">Can't access your account?</a>
            <button className="back-button" onClick={handleEmailBack}>Back</button>
            <button className="login-button" onClick={handleNext}>Next</button>
          </>
        ) : (
          <>
            <h2 className="login-text">Enter Password</h2>
            <input
              className="login-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {errorMessage && <span style={{ color: 'red', marginLeft: '10%' }}>{errorMessage}</span>}<br />
            <a className="recover" href="recover.html">Forgotten My Password</a>
           
            <button className="login-button" onClick={handleSignIn} style={{ marginLeft: '60%' }}>Sign In</button>
          </>
        )}
      </div><br />
      <footer className="footer">
        <a className="terms" href="terms.html">Terms of use</a>
        <a className="privacy" href="privacy.html">Privacy & cookies</a>
      </footer>
    </div>
  );
};

export default Login;
