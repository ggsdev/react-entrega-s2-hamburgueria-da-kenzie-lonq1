export function Product({ name, category, price, img }) {
    return (
        <li>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{category}</p>
            <p>{price}</p>
            <button>Adicionar</button>
        </li>
    );
}
