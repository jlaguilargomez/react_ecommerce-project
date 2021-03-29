import { connect } from 'react-redux';

import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartDropdown, itemCount }) => {
  console.log('cartItems: ', itemCount);
  return (
    <div className='cart-icon' onClick={toggleCartDropdown}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
});

// el primer parámetro, null, es el estado por defecto
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
