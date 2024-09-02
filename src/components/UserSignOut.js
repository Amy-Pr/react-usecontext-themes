import { useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

const UserSignOut = () => {
  const context = useContext(UserContext);

  useEffect(() => context.actions.signOut());
  return (
    <Navigate to="/" replace />
  );
};

export default UserSignOut;