import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Fetching',
        message: 'Fetching cart data..',
      })
    );

    const fetData = async () => {
      const response = await fetch(
        'https://react-post-35b9b-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error('Fetching cart data failed.');
      }

      const responseData = await response.json();
      return responseData;
    };

    try {
      const cartData = await fetData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'fetched cart data successfully',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: error.message,
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending',
        message: 'Sending cart data..',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-post-35b9b-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: error.message,
        })
      );
    }
  };
};
