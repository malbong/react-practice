import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

const RootRayout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};
export default RootRayout;
