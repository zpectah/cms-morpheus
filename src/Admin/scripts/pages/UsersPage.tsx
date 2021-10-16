import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface UsersPageProps {}

const UsersPage: React.FC<UsersPageProps> = ({}) => {
  const { t } = useTranslation('page');

  return (
    <Layout.Base route={ROUTES.app.users}>
      <div>
        UsersPage
      </div>
    </Layout.Base>
  );
};

export default UsersPage;