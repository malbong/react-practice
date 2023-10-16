import { Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>product detail: {params.productID}</h1>
      <Link to=".." relative="path">
        Back
      </Link>
    </Fragment>
  );
};

export default ProductDetailPage;
