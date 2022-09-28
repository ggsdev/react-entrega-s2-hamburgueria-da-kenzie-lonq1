import { useEffect, useState } from "react";
import "./App.css";
import { ProductsList } from "./components/ProductsList";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
            .then((resp) => resp.json())
            .then((resp) => {
                return setProducts(resp);
            })
            .catch((err) => console.log(err));
    });

    return (
        <div className="App">
            <ProductsList products={products} />
        </div>
    );
}

export default App;
