import { Product } from "../Product";

export function ProductsList({ products }) {
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

    return <ul>{allProducts}</ul>;
}
