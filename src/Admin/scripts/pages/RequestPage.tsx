import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface RequestPageProps {}

const RequestPage: React.FC<RequestPageProps> = ({}) => {
  const { t } = useTranslation('page');

  return (
    <Layout.Minimal route={ROUTES.app.request}>
      <div>
        RequestPage
      </div>
    </Layout.Minimal>
  );
};

export default RequestPage;