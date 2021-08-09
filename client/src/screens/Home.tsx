import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return <div>Hello {user?.names}!!</div>;
};

export default Home;
