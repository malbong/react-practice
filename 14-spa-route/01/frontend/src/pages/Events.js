import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const { data } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={data}>
        {(data) => <EventsList events={data.events} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json('Could not fetch events', { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
};

export const loader = () => {
  return defer({
    data: loadEvents(),
  });
};
