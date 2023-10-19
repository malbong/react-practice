import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

import PageContent from '../components/PageContent';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error occurred';
  let message = error.data;

  if (error.status === 500) {
    title = 'Internal Server Error!';
  } else if (error.status === 404) {
    title = 'Not Found!';
  }

  if (error)
    return (
      <>
        <MainNavigation />
        <PageContent title={title}>
          <p>{message}</p>
        </PageContent>
      </>
    );
};
export default ErrorPage;
