import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Fragment>
      <h1>My Home Page!</h1>
      Go to <Link to="products">the list of products</Link>
    </Fragment>
  );
};
export default HomePage;
