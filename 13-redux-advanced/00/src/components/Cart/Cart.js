import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const plusHandler = (id) => {
    dispatch(cartActions.plus(id));
  };
  const minusHandler = (id) => {
    dispatch(cartActions.minus(id));
  };

  const cartItems = items.map((item) => {
    return (
      <CartItem
        key={item.id}
        onPlus={plusHandler}
        onMinus={minusHandler}
        itemInfo={{
          id: item.id,
          title: item.title,
          quantity: item.quantity,
          total: item.total,
          price: item.price,
        }}
      />
    );
  });

  if (cartItems.length === 0) {
    return (
      <Card className={classes.cart}>
        <h2>Your Shopping Cart is empty</h2>
      </Card>
    );
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItems}</ul>
    </Card>
  );
};

export default Cart;
