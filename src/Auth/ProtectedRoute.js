import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './Auth';

export default function ProtectedRoute({ children }) {
  const result = isAuthenticated();
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}