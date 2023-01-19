import React from 'react';
import withSuspense from 'helpers/hoc/withSuspense';
import { createBrowserRouter, Link, Outlet as RouterOutlet } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

const Home = withSuspense(React.lazy(() => import('../screens/Home')));
const Dashboard = withSuspense(React.lazy(() => import('../screens/Dashobard')));
const CreateNFT = withSuspense(React.lazy(() => import('../screens/create-nft')));

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
          <li>
            <Link to={'/create-nft'}>Create NFT</Link>
          </li>
        </ul>
        <RouterOutlet />
      </div>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/nil',
        element: <Dashboard />,
      },
      {
        path: '/create-nft',
        element: (
          <ProtectedRoute>
            <CreateNFT />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
