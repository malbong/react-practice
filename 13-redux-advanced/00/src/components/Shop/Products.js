import ProductItem from './ProductItem';
import classes from './Products.module.css';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

const dummy = [
  {
    id: Math.random(),
    title: 'banana',
    price: 3,
    description: 'hgahahasdfasdf',
  },
  {
    id: Math.random(),
    title: 'apple',
    price: 6,
    description: 'HAHI123123Hello',
  },
  {
    id: Math.random(),
    title: 'orange',
    price: 4,
    description: 'sour asdfasdf',
  },
];

const Products = (props) => {
  const dispatch = useDispatch();

  const addItemHandler = (info) => {
    dispatch(cartActions.addItem(info));
  };

  const productItems = dummy.map((item) => {
    return (
      <ProductItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
        addItem={addItemHandler}
      ></ProductItem>
    );
  });

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productItems}</ul>
    </section>
  );
};

export default Products;
