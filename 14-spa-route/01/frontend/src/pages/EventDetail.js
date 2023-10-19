import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';
import { Suspense } from 'react';

import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail');

  const { eventData, eventsData } = data;
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={eventData}>
          {(loadedEventData) => <EventItem event={loadedEventData.event} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={eventsData}>
          {(loadedEventsData) => (
            <EventsList events={loadedEventsData.events} />
          )}
        </Await>
      </Suspense>
    </>
  );
};
export default EventDetailPage;

const loadEvent = async (id) => {
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json('Could not fetch details for selected event.', { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
};

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json('Could not fetch events', { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
};

export const loader = async ({ request, params }) => {
  const id = params.eventID;

  return defer({
    eventData: await loadEvent(id),
    eventsData: loadEvents(),
  });
};

export const action = async ({ request, params }) => {
  const response = await fetch(
    'http://localhost:8080/events/' + params.eventID,
    {
      method: request.method,
    }
  );

  if (!response.ok) {
    throw json('Could not delete the event.', { status: 500 });
  }

  return redirect('/events');
};
