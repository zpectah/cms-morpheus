import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface DashboardPageProps {}

const DashboardPage: React.FC<DashboardPageProps> = ({}) => {
  const { t } = useTranslation('page');

  return (
    <Layout.Base route={ROUTES.app.dashboard}>
      <div>
        DashboardPage
      </div>
    </Layout.Base>
  );
};

export default DashboardPage;