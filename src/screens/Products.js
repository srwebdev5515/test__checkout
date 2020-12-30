import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../redux/reducers/product';
import { addToCart } from '../redux/reducers/cart';
import { productsSelector } from '../redux/selectors';

import Header from '../components/common/Header';
import CartButton from '../components/common/CartButton'
import ProductRow from '../components/product/ProductRow';

export const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(productsSelector);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const onProductAdd = (product) => {
        dispatch(addToCart(product.sku));
    }

    return (
        <div className="container">
            <Header title="Products" right={<CartButton />}></Header>
            {products?.map(p => <ProductRow product={p} onProductAdd={() => onProductAdd(p)} />)}
        </div>
    );
}
