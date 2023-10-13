import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';

const CartButton = (props) => {
  const cartAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(cartActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartAmount}</span>
    </button>
  );
};

export default CartButton;
