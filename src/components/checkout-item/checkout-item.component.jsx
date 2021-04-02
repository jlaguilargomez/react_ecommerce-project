import { connect } from 'react-redux';

import { addItem, removeItem, clearItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={cartItem.imageUrl} alt='item' />
      </div>
      <span className='name'>{cartItem.name}</span>
      <span className='quantity'>
        <span className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </span>
        <span className='value'>{cartItem.quantity}</span>
        <span className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </span>
      </span>
      <span className='price'>{cartItem.price}</span>
      <span className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  clearItem: (item) => dispatch(clearItem(item)),
  removeItem: (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
