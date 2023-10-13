import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const removeItemHandler = (id) => {
    dispatch(cartActions.removeItem({ id }));
  };

  const addItemHandler = (id) => {
    dispatch(cartActions.addItem({ id }));
  };

  const cartItems = items.map((item) => {
    return (
      <CartItem
        key={item.id}
        removeItem={removeItemHandler}
        addItem={addItemHandler}
        item={{
          id: item.id,
          title: item.title,
          quantity: item.quantity,
          price: item.price,
          total: item.quantity * item.price,
        }}
      />
    );
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 && <h3>Your Cart Is Empty</h3>}
      {cartItems.length !== 0 && <ul>{cartItems}</ul>}
    </Card>
  );
};

export default Cart;
