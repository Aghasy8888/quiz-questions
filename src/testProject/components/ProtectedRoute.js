import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ children, haveFinished }) => {


  if (haveFinished) {
    return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedRoute;