import React from 'react';
import 'lib/i18n/config';
import './App.css';
import './styles/globals.css';

import { RouterProvider } from 'react-router-dom';
import router from './routes';

import { dynamicTheme as defaultTheme } from 'ui/foundations';
import { MuiThemeProvider } from 'providers/MuiThemeProvider';
import { ToastProvider } from 'providers/ToastProvider';
import { useApollo } from 'graphql-client/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { AppWrapper } from 'providers/AppProvider';

function App() {
  const apolloClient = useApollo();

  return (
    <ApolloProvider client={apolloClient}>
      <AppWrapper>
        <MuiThemeProvider dynamicTheme={defaultTheme}>
          {/* Theme can change at run time (with help of either context or store) */}
          <ToastProvider>
            <RouterProvider router={router}></RouterProvider>
          </ToastProvider>
        </MuiThemeProvider>
      </AppWrapper>
    </ApolloProvider>
  );
}

export default App;
