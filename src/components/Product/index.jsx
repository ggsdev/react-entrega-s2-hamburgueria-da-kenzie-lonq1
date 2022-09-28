export function Product({ name, category, price }) {
    return (
        <li>
            <h2>{name}</h2>
            <p>{category}</p>
            <span>{price}</span>
        </li>
    );
}
