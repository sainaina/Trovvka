import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { VerifyEmail } from './pages/auth/VerifyEmail.jsx';

import { RegisterSuccess } from './pages/auth/RegisterSuccess.jsx';
import App from './App.jsx';
import { MainLayout } from './components/layout/MainLayout.jsx';

import { ProviderInfo } from './pages/auth/ProviderInfo.jsx'
import { RegisterWithGoogle } from './pages/auth/RegisterWithGoogle.jsx'


import LoginPage from './pages/auth/LoginPage.jsx'
import HorizontalCard from './components/cart/HorizontalCard.jsx'
import { CommentCart } from './components/cart/CommentCart.jsx'
import { SearchFilter } from './pages/search-filter/SearchFilterVertical.jsx'
import { SearchFilterHorizontal } from './pages/search-filter/SearchFilterHorizontal.jsx'
import UserDashboardOverall from './pages/dashboard-user/UserDashboardOverall.jsx'
import { UserDropdown } from './components/common/UserDropdown.jsx'
import RegisterPage from './pages/auth/RegisterPage.jsx';
import { store } from './redux/feature/store.js';
import ChooseRegister from './pages/auth/ChooseRegister.jsx';
import VerifyCode from './pages/auth/VerifyCode.jsx';
import HomeLogin from './pages/home-page/HomeLogin.jsx';
import HomeNotLogin from './pages/home-page/HomeNotLogin.jsx';


const router = createBrowserRouter([
  
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: "/search-filter",
        element: <SearchFilter />
      },
      {
        path: "/search-filter-hori",
        element: <SearchFilterHorizontal />
      },
      {
        path: "/home-login",
        element: <HomeLogin />
      },
      {
        path: "/home-not-login",
        element: <HomeNotLogin/>
      }
    ],


  },
  {
    path: '/verify-email',
    element: <VerifyEmail />
  },
  {
    path: '/register-success',
    element: <RegisterSuccess />
  },

  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/provider-register',
    element: <ProviderInfo />
  },
  {
    path: '/register-google',
    element: <RegisterWithGoogle />
  },
  {
    path: "/horizontal-card",
    element: <HorizontalCard />
  },
  {
    path: "/comment-card",
    element: <CommentCart />
  },
  {
    path: "/dashboard-user",
    element: <UserDashboardOverall />
  },

  {
    path: "/user-drop",
    element: <UserDropdown />
  },
  {
    path: "/choose-register",
    element: <ChooseRegister />
  },
  {
    path: "/verify-code",
    element: <VerifyCode />
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
