import { Product } from "../Product";
import { UlList } from "./style.js";

export function ProductsList({ products, filteredProducts, handleClick }) {
    function render() {
        const allProducts = products.map((product) => {
            const { name, category, price, id, img } = product;
            return (
                <Product
                    id={id}
                    handleClick={handleClick}
                    key={id}
                    name={name}
                    category={category}
                    price={price}
                    img={img}
                    children={"Adicionar"}
                />
            );
        });

        if (filteredProducts.length) {
            return filteredProducts.map((product) => {
                const { name, category, price, id, img } = product;
                return (
                    <Product
                        id={id}
                        handleClick={handleClick}
                        key={id}
                        name={name}
                        category={category}
                        price={price}
                        children={"Adicionar"}
                        img={img}
                    />
                );
            });
        }

        return allProducts;
    }

    return <UlList>{render()}</UlList>;
}
