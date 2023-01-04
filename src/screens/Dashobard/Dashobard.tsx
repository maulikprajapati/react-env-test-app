import React from 'react';
import { useTranslation } from 'react-i18next';

export const DashboardScreen = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>NIL Home Page</h1>
      <p> Translated value {t('Log in')}</p>
    </div>
  );
};
