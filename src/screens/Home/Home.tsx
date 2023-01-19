import React from 'react';
import { Helmet } from 'react-helmet';
export const HomeScreen = () => {
  return (
    <div>
      <Helmet>
        <title>Nilay Kothari on nXlvl</title>
        <meta name='description' content="What's your neXt level?" />

        <meta property='og:url' content='https://nxconnect.me/nilay.kothari' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Nilay Kothari on nXlvl' />
        <meta property='og:description' content="What's your neXt level?" />
        <meta
          property='og:image'
          content='https://data-tr-prod.azureedge.net/profile-images/30070792-48dd-4ed2-b2cc-61155953cb7c_meta.jpeg'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='nxconnect.me' />
        <meta property='twitter:url' content='https://nxconnect.me/nilay.kothari' />
        <meta name='twitter:title' content='Nilay Kothari on nXlvl' />
        <meta name='twitter:description' content="What's your neXt level?" />
        <meta
          name='twitter:image'
          content='https://data-tr-prod.azureedge.net/profile-images/30070792-48dd-4ed2-b2cc-61155953cb7c_meta.jpeg'
        />
      </Helmet>
      <h1>
        Marketplace Home Page
        {process.env.FILE_NAME}
      </h1>
    </div>
  );
};
