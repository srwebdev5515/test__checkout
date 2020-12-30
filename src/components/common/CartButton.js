import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { cartTotalCount } from '../../redux/selectors'

const CartButton = () => {
    const cartTotal = useSelector(cartTotalCount);

    return cartTotal > 0 ?
        (<Link href="/cart">
            <a className="btn btn-link">Cart {cartTotal}</a>
        </Link>) : '';
}

export default CartButton;
