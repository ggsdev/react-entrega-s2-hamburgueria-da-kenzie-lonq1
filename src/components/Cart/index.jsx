import toast from "react-hot-toast";
import { Product } from "../Product/index.jsx";
import { CartAside } from "./style.js";
export function Cart({ currentSale, setCurrentSale, removeItemCart }) {
    const mappingItems = currentSale.map((item) => {
        const { name, category, price, img, handleClick, id, count } = item;

        return (
            <Product
                children={"Remover"}
                removeItemCart={removeItemCart}
                id={id}
                handleClick={handleClick}
                key={id}
                name={name}
                category={category}
                price={price}
                img={img}
                count={count}
            />
        );
    });

    const totalCost = currentSale.reduce(
        (acc, act) => acc + act.price * act.count,
        0
    );
    console.log(currentSale);
    return (
        <CartAside>
            {currentSale.length ? (
                <div>
                    <div className="cart__header">
                        <h2>Carrinho de Compras</h2>
                    </div>
                    <ul className="scroll">{mappingItems}</ul>
                    <div className="cart__total">
                        <div className="total__container">
                            <h3>Total</h3>
                            <p>R$ {totalCost.toFixed(2)}</p>
                        </div>
                        <button
                            className="cart__remove--all"
                            onClick={() => {
                                toast.success("Carrinho limpo");

                                return setCurrentSale([]);
                            }}
                        >
                            Remover todos
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <div className="cart__header">
                        <h2>Carrinho de Compras</h2>
                    </div>
                    <div className="cart__empty">
                        <h2>Sua Sacola está vazia</h2>
                        <span>Adicione itens</span>
                    </div>
                </>
            )}
        </CartAside>
    );
}
