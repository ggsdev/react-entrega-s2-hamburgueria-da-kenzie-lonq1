import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
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

    useEffect(() => {
        api.get("products")
            .then((resp) => setProducts(resp.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="App">
            <Header />
            <ProductsList products={products} />
        </div>
    );
}

export default App;
