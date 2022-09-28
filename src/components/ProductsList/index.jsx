import { Product } from "../Product";

export function ProductsList({ products, filteredProducts }) {
    function render() {
        const allProducts = products.map((product) => {
            const { name, category, price, id, img } = product;
            return (
                <Product
                    key={id}
                    name={name}
                    category={category}
                    price={price}
                    img={img}
                />
            );
        });

        if (filteredProducts.length) {
            return filteredProducts.map((product) => {
                const { name, category, price, id, img } = product;
                return (
                    <Product
                        key={id}
                        name={name}
                        category={category}
                        price={price}
                        img={img}
                    />
                );
            });
        }

        return allProducts;
    }

    return <ul>{render()}</ul>;
}
