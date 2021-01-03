import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BASE_ROUTES } from '../navigation/routes';

import Header from '../components/common/Header';
import CartButton from '../components/common/CartButton';
import CartRow from '../components/cart/CartRow';
import CartFooter from '../components/cart/CartFooter';

import {
    productsInCart,
    cartSelector,
} from '../redux/selectors';

import {
    addToCart,
    removeFromCart,
    removeLineFromCart,
} from '../redux/reducers/cart';

const styles = {
    backLink: {
        fontSize: 40,
        lineHeight: 1,
        color: 'black'
    }
};

const LinkToProducts = () => {
    return (
        <Link to={BASE_ROUTES.products} style={styles.backLink}>&#8249;</Link>
    );
}

export const Carts = () => {
    const dispatch = useDispatch();
    const products = useSelector(productsInCart);
    const cart = useSelector(cartSelector);

    const handleAddToCart = (sku) => {
        dispatch(addToCart(sku))
    }

    const handleRemoveFromCart = (sku) => {
        dispatch(removeFromCart(sku))
    }

    const handleRemoveLineFromCart = (sku) => {
        dispatch(removeLineFromCart(sku))
    }

    return (
        <div className="container">
            <Header title="Carts"
                left={<LinkToProducts />}
                right={<CartButton />}
            ></Header>
            <div className="carts-wrapper">
                {products.map(p => (
                    <CartRow key={p.sku}
                        product={p}
                        cartCount={cart[p.sku]}
                        addToCart={handleAddToCart}
                        removeFromCart={handleRemoveFromCart}
                        removeLineFromCart={handleRemoveLineFromCart}
                    />
                ))}
            </div>
            <div className="carts-footer">
                <CartFooter />
            </div>
        </div>
    );
};
