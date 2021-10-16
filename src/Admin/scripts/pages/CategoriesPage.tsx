import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface CategoriesPageProps {}

const CategoriesPage: React.FC<CategoriesPageProps> = ({}) => {
  const { t } = useTranslation('page');

  return (
    <Layout.Base route={ROUTES.app.categories}>
      <div>
        CategoriesPage
      </div>
    </Layout.Base>
  );
};

export default CategoriesPage;