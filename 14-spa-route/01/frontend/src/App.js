import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootRayout from './pages/RootRayout';
import HomePage from './pages/Home';
import EventPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import EventRootRayout from './pages/EventRootRayout';
import ErrorPage from './pages/Error';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootRayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventRootRayout />,
        children: [
          {
            index: true,
            element: <EventPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventID',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
