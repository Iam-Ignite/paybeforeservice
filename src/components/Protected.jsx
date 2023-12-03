/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Layout from '../components/Dashboard/Layout';

export default function Protected({ component: Component }) {
  const [isVerified, setIsVerified] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('isLoggedIn');

    const verifyToken = () => {
      // You can use your preferred JWT library to verify the token
      // Example: verify(token, 'your_secret_key')
      if (token) {
        return true; // Token verification success
      }
      return false; // Token verification failed
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