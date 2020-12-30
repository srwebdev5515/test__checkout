const styles = {
    header: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    pointerCursor: {
        cursor: 'pointer'
    }
};

const Header = ({ title, left, right, onLeft, onRight }) => (
    <div className="row" style={styles.header}>
        <div className="col-3" style={styles.cursor} onClick={onLeft}>
            {left}
        </div>
        <div className="col-6">
            <h2 className="text-center">{title}</h2>
        </div>
        <div className="col-3 text-right" style={styles.cursor} onClick={onRight}>
            {right}
        </div>
    </div>
);

export default Header;
