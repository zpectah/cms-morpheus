import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface Error404PageProps {}

const Error404Page: React.FC<Error404PageProps> = ({}) => {
  const { t } = useTranslation('page');

  return (
    <Layout.Minimal route={ROUTES.app["error-404"]}>
      <div>
        Error404Page
      </div>
    </Layout.Minimal>
  );
};

export default Error404Page;