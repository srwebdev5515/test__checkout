const styles = {
    row: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 12px',
        borderBottom: '1px solid #eee'
    },
    itemName: {
        marginRight: 'auto',
    },
    button: {
        display: 'inline-flex',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#777',
        fontSize: 20,
        cursor: 'pointer',
        lineHeight: 1.3,
        color: 'white',
        margin: '0 8px'
    }
};

const CartRow = ({ product, cartCount, removeFromCart, addToCart, removeLineFromCart }) => {
    return (
        <div className="cart-row" style={styles.row}>
            <div style={styles.itemName}>{product.name}</div>
            <div style={styles.button} onClick={() => removeFromCart(product.sku)}>-</div>
            <div>{cartCount}</div>
            <div style={styles.button} onClick={() => addToCart(product.sku)}>+</div>
            <div style={styles.button} onClick={() => removeLineFromCart(product.sku)}>x</div>
        </div>
    );
}

export default CartRow;
