import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Login from '../Auth/Login';
import Register from '../Register/Register';
import ProtectedRoute from '../Auth/ProtectedRoute';
import AuthLayout from '../Layout/AuthLayout';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import BankAccount from '../Pages/BankAccount';
import Category from '../Pages/Category';
import Planning from '../Pages/Planning';
import Transaction from '../Pages/Transaction';

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
      { path: "/",            element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: "/home",        element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: "/transaction", element: <ProtectedRoute><Transaction /></ProtectedRoute> },
      { path: "/planning",    element: <ProtectedRoute><Planning /></ProtectedRoute> },
      { path: "/category",    element: <ProtectedRoute><Category /></ProtectedRoute> },
      { path: "/bankAccount", element: <ProtectedRoute><BankAccount /></ProtectedRoute> },
    ]
  },
  { path: "*", element: <Navigate to="/login" replace /> }
]);