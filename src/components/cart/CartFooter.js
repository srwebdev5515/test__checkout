import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";

import { discountSelector, subTotalSelector } from "../../redux/selectors";
import { applyPromo } from '../../redux/reducers/promo';
import { checkout } from '../../redux/reducers/checkout';

const styles = {
    row: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 12px',
    },
    input: {
        margin: '0 10px',
        width: 400,
        marginRight: 'auto'
    },
    price: {
        marginLeft: 'auto'
    },
    btnCheckout: {
        margin: 'auto'
    }
};

const CartFooter = () => {
    const subTotal = useSelector(subTotalSelector);
    const discount = useSelector(discountSelector);
    const [promo, setPromo] = useState('');

    const dispatch = useDispatch();

    const handlePromoChange = (event) => {
        setPromo(event.target.value);
    }

    const handleApply = () => {
        dispatch(applyPromo(promo));
    }

    const handleCheckout = () => {
        dispatch(checkout({
            success: handleSuccess,
            failure: handelFailure,
        }))
    }

    const handleSuccess = () => {
        alert('Success');
    }

    const handelFailure = () => {
        alert('Failed!');
    }

    return (
        <>
            <div style={styles.row}>
                <label>Promo Code:</label>
                <input type="text"
                    className="form-control"
                    style={styles.input}
                    onChange={handlePromoChange}
                />
                <button className="btn btn-success"
                    disabled={!promo}
                    onClick={handleApply}
                >
                    Apply
                </button>
            </div>
            <div style={styles.row}>
                <label>Sub Total:</label>
                <span style={styles.price}>${subTotal}</span>
            </div>
            <div style={styles.row}>
                <label>Promo Amount:</label>
                <span style={styles.price}>${discount}</span>
            </div>
            <div style={styles.row}>
                <label>Basket Total:</label>
                <span style={styles.price}>${(subTotal - discount).toFixed(2)}</span>
            </div>
            <div style={styles.row}>
                <button className="btn btn-outline-success btn-lg"
                    style={styles.btnCheckout}
                    onClick={handleCheckout}
                >
                    Checkout
                </button>
            </div>
        </>
    );
}

export default CartFooter;
