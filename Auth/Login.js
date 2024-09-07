import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [message, setMessage] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate login credentials
    const isLoggedIn = login(email, password);

    if (isLoggedIn) {
      setMessage("Logged in successfully");
      setRedirect(true);
    } else {
      setMessage("Invalid email or password. Please try again.");
    }
  };

  useEffect(() => {
    if (redirect) {
      const timer = setTimeout(() => {
        navigate('/products'); // Redirect to ProductList page
      }, 500); // Delay for a brief moment to show the message

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [redirect, navigate]);

  return (
    <div>
      <h2>Login</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
