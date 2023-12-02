

import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => {
    // Retrieve userId from localStorage on initial load
    return localStorage.getItem('userId') || null;
  });

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  // const [acceptedRequests, setAcceptedRequests] = useState([]);

  const [acceptedRequests, setAcceptedRequests] = useState(() => {
    const storedAcceptedRequests = localStorage.getItem('acceptedRequests');
    return storedAcceptedRequests ? JSON.parse(storedAcceptedRequests) : [];
  });

  useEffect(() => {
    // Update localStorage when acceptedRequests changes
    localStorage.setItem('acceptedRequests', JSON.stringify(acceptedRequests));
  }, [acceptedRequests]);
  
  // const [role, setRole] = useState(null); 
  const [role, setRole] = useState(() => {
    return localStorage.getItem('role') || null;
  });

  useEffect(() => {
    // Update localStorage when userId changes
    if (userId) {
      localStorage.setItem('userId', userId);
    } else {
      localStorage.removeItem('userId');
    }
    if (role) {
      localStorage.setItem('role', role);
    } else {
      localStorage.removeItem('role');
    }
  }, [userId,role]);

  const addToAcceptedRequests = (companyId) => {
    setAcceptedRequests((prevAcceptedRequests) => [...prevAcceptedRequests, companyId]);
  };

  return (
    <UserContext.Provider value={{ userId, setUserId,userId, setUserId, name, setName, email, setEmail,role,setRole,acceptedRequests, setAcceptedRequests,addToAcceptedRequests }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

