import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { cartTotalCount } from '../../redux/selectors'
import { BASE_ROUTES } from '../../navigation/routes';

const CartButton = () => {
    const cartTotal = useSelector(cartTotalCount);

    return cartTotal > 0 ?
        (<Link to={BASE_ROUTES.cart}>
            <span className="btn btn-link">Cart {cartTotal}</span>
        </Link>) : '';
}

export default CartButton;
