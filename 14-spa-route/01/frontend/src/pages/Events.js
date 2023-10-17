import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
  { id: 'e1', title: 'Event1' },
  { id: 'e2', title: 'Event2' },
  { id: 'e3', title: 'Event3' },
];

const EventsPage = () => {
  return (
    <Fragment>
      <h1>Events</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
export default EventsPage;
