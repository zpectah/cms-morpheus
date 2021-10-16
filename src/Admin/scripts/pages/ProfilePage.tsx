import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = ({}) => {
  const { t } = useTranslation('page');

  return (
    <Layout.Base route={ROUTES.app.profile}>
      <div>
        ProfilePage
      </div>
    </Layout.Base>
  );
};

export default ProfilePage;