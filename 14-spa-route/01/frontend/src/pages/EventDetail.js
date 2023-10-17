import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Event Detail</h1>
      <p>Event ID: {params.eventID}</p>
    </Fragment>
  );
};
export default EventDetailPage;
