import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/company');
  }, [navigate]);
  return <div>Home</div>;
};

export default Home;
