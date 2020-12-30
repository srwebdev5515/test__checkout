import React, { useEffect } from 'react';
import Header from '../components/common/Header';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../redux/reducers/product';
import { productsSelector } from '../redux/selectors';
import ProductRow from '../components/product/ProductRow';

export const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(productsSelector);

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

    const onProductAdd = (product) => {
        console.log('Add product to cart======', product);
    }

    return (
        <div className="container">
            <Header title="Products"></Header>
            {products?.map(p => <ProductRow product={p} onProductAdd={() => onProductAdd(p)} />)}
        </div>
    );
}
