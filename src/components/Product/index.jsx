import { LiCard } from "./style.js";

export function Product({
    name,
    category,
    price,
    img,
    handleClick,
    id,
    children,
    removeItemCart,
    count,
}) {
    return (
        <LiCard>
            <figure>
                <img src={img} alt={name} />
            </figure>
            <div className="card__container">
                <div>
                    <h2>{name}</h2>
                    <p className="liCard__category">{category}</p>
                </div>
                <p className="liCard__price">R${price.toFixed(2)}</p>

                <div className="btn__container">
                    <button
                        onClick={(event) => {
                            if (event.target.innerText === "Adicionar") {
                                return handleClick(id);
                            } else {
                                return removeItemCart(id);
                            }
                        }}
                        className="btn-default"
                    >
                        {children}
                    </button>
                    <span>{count}</span>
                </div>
            </div>
        </LiCard>
    );
}
