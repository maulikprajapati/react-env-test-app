import React from 'react';
import { createBrowserRouter, Link, Outlet as RouterOutlet } from 'react-router-dom';

const Home = React.lazy(() => import('../screens/Home'));
const Dashboard = React.lazy(() => import('../screens/Dashobard'));

const router = createBrowserRouter([
  {
    element: (
      <div>
        <ul>
          <li>
            <Link to={'/'}>Marketplace</Link>
          </li>
          <li>
            <Link to={'/nil'}>NIL</Link>
          </li>
        </ul>
        <RouterOutlet />
      </div>
    ),
    children: [
      {
        path: '/',
        element: (
          <React.Suspense fallback={<>Loading...</>}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: '/nil',
        element: (
          <React.Suspense fallback={<>Loading...</>}>
            <Dashboard />
          </React.Suspense>
        ),
      },
    ],
  },
]);

export default router;
