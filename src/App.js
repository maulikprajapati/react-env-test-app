import React from 'react';
import 'lib/i18n/config';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
