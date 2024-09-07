import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve the logged-in user from local storage if they exist
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const signup = (name, email, password) => {
    const newUser = { name, email, password };

    // Retrieve existing users or initialize with an empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if user already exists
    const userExists = users.find(user => user.email === email);
    if (userExists) {
      alert('User with this email already exists!');
      return false;
    }

    // Add new user to users array and save to local storage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    return true;
  };

  const login = (email, password) => {
    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find user by email and password
    const matchedUser = users.find(user => user.email === email && user.password === password);

    if (matchedUser) {
      // Set user as logged-in and save to local storage
      setUser(matchedUser);
      localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
