import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface PagesPageProps {}

const PagesPage: React.FC<PagesPageProps> = ({}) => {
  const { t } = useTranslation('page');

  return (
    <Layout.Base route={ROUTES.app.pages}>
      <div>
        PagesPage
      </div>
    </Layout.Base>
  );
};

export default PagesPage;