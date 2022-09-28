export function Product({ name, category, price, img }) {
    return (
        <li>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{category}</p>
            <span>{price}</span>
            <button>Adicionar</button>
        </li>
    );
}
