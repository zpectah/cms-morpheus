import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../constants';
import Layout from '../components/Layout';

interface HelpPageProps {}

const HelpPage: React.FC<HelpPageProps> = ({}) => {
  const { t } = useTranslation('page');

  return (
    <Layout.Base route={ROUTES.app.help}>
      <div>
        HelpPage
      </div>
    </Layout.Base>
  );
};

export default HelpPage;