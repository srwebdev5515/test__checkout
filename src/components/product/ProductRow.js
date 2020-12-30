const styles = {
    productRow: {
        display: 'flex',
        padding: '10px 15px',
        alignItems: 'center',
        borderBottom: '1px solid #eee',
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

const ProductRow = ({ product, onProductAdd }) => (
    <div style={styles.productRow}>
        <div>{product.name}</div>
        <div style={styles.productPrice}>${product.price}</div>
        <div>
            <span style={styles.btnAdd} onClick={onProductAdd}>+</span>
        </div>
    </div>
)

export default ProductRow;
