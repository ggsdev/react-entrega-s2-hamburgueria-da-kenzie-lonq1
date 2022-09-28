import { useEffect, useState } from "react";
import "./App.css";
import { HeaderC } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { api } from "./services/api";

// useEffect(() => {
//     fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
//         .then((resp) => resp.json())
//         .then((resp) => {
//             return setProducts(resp);
//         })
//         .catch((err) => console.log(err));
// });

function App() {
    const [products, setProducts] = useState([]);
    const [filterInput, setFilterInput] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        api.get("products")
            .then((resp) => setProducts(resp.data))
            .catch((err) => console.log(err));
    }, []);

    function showProducts() {
        const filtering = products.filter(
            (product) =>
                product.name.toLowerCase() === filterInput.toLowerCase()
        );

        setFilteredProducts(filtering);
        return filtering;
    }

    return (
        <div className="App">
            <HeaderC
                showProducts={showProducts}
                setFilterInput={setFilterInput}
            />
            <ProductsList
                // showProducts={showProducts}
                filterInput={filterInput}
                filteredProducts={filteredProducts}
                products={products}
            />
        </div>
    );
}

export default App;
