import "./ProductCard.css";

function ProductCard(props) {
    return (
        <div>
        <span>{props.product.title} </span>
        <div>{props.product.price}</div>
        </div>
    );
}

export default ProductCard;