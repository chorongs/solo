import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Allrooms from './pages/Allrooms';
import NewRoom from './pages/NewRoom';
import NotFound from './pages/NotFound';
import RoomDetail from './pages/RoomDetail';
import MyCart from './pages/MyCart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/rooms', element: <Allrooms /> },
      {
        path: '/rooms/new',
        element: <NewRoom />,
      },
      {
        path: '/rooms/:id',
        element: <RoomDetail />,
      },
      {
        path: '/carts',
        element: <MyCart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
