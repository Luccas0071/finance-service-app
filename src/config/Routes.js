import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Home from '../Home/Home';
import Empresa from '../Home/Empresa';
import Contato from '../Home/Contato';
import Login from '../Auth/Login';
import Register from '../Register/Register';
import ProtectedRoute from '../Auth/ProtectedRoute';
import AuthLayout from '../Layout/AuthLayout';
import MainLayout from '../Layout/MainLayout';

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/login",     element: <Login /> },
      { path: "/register",  element: <Register /> }
    ]
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/",        element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: "/home",    element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: "/empresa", element: <ProtectedRoute><Empresa /></ProtectedRoute> },
      { path: "/contato", element: <ProtectedRoute><Contato /></ProtectedRoute> },
    ]
  },
  { path: "*", element: <Navigate to="/login" replace /> }
]);