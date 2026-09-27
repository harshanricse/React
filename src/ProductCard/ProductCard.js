import "./ProductCard.css";

function ProductCard(props) {
    return (
        <div className="card">
        <span>{props.product.title} </span>
        <div>{props.product.price}</div>
        </div>
    );
}

export default ProductCard;