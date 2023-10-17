import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation';

const EventRootRayout = () => {
  return (
    <Fragment>
      <EventsNavigation />
      <Outlet />
    </Fragment>
  );
};

export default EventRootRayout;
