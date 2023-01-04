import React from 'react';

export const HomeScreen = () => {
  console.log(process.env.FILE_NAME)
  return <h1>Marketplace Home Page
    {process.env.FILE_NAME}
  </h1>;
};
