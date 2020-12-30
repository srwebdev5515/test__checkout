const styles = {
    productRow: {
        display: 'flex',
        padding: '10px 20px',
        alignItems: 'center'
    },
    productPrice: {
        width: 50,
        marginLeft: 'auto'
    },
    btnAdd: {
        display: 'inline-flex',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#777',
        fontSize: 20,
        cursor: 'pointer',
        lineHeight: 1.3,
        color: 'white'
    }
};

export default ({ product, onProductAdd }) => (
    <div style={styles.productRow}>
        <div>{product.name}</div>
        <div style={styles.productPrice}>${product.price}</div>
        <div>
            <span style={styles.btnAdd} onClick={onProductAdd}>+</span>
        </div>
    </div>
)
