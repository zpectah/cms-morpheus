import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface SettingsPageProps {}

const SettingsPage: React.FC<SettingsPageProps> = ({}) => {
  const { t } = useTranslation('page');

  return (
    <Layout.Base route={ROUTES.app.settings}>
      <div>
        SettingsPage
      </div>
    </Layout.Base>
  );
};

export default SettingsPage;