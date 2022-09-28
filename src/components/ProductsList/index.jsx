import { Product } from "../Product";

export function ProductsList({ products }) {
    const allProducts = products.map((product) => {
        const { name, category, price, id } = product;
        return (
            <Product key={id} name={name} category={category} price={price} />
        );
    });

    // console.log(allProducts);

    return <ul>{allProducts}</ul>;
}
