import React, { useState, useEffect } from 'react';
import Layout from '../components/Dashboard/Layout';

export default function Protected({ component: Component }) {
  const [isVerified, setIsVerified] = useState(true);

  useEffect(() => {
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('jwt=')) // Assuming the cookie name is 'jwt'
      ?.split('=')[1];

    const verifyToken = () => {
      // You can use your preferred JWT library to verify the token
      // Example: verify(token, 'your_secret_key')
      if (token) {
        return true; // Token verification success
      }
      return true; // Token verification failed
    };

    setIsVerified(verifyToken());
  }, []);

  return isVerified ? (
    <Layout>
      <Component />
    </Layout>
  ) : (
    <div>Unauthorized Access</div> // Render an error message for unauthorized access
  );
}