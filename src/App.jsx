import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import "./App.css";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { api } from "./services/api";
function App() {
    const [products, setProducts] = useState([]);
    const [filterInput, setFilterInput] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentSale, setCurrentSale] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        api.get("products")
            .then((resp) => setProducts(resp.data))
            .catch((err) => console.log(err));
    }, []);

    function showProducts() {
        const filtering = products.filter((product) =>
            product.name
                .toLowerCase()
                .trim()
                .includes(filterInput.toLowerCase().trim())
        );

        setFilteredProducts(filtering);
        if (filtering.length) {
            toast.success(`Produto encontrado :)`);
        } else {
            toast.error(`Produto não encontrado, olhe novamente a vitrine.`);
        }

        return filtering;
    }

    function handleClick(idProduct) {
        const searchingProduct = products.find(
            (product) => product.id === idProduct
        );

        if (!currentSale.includes(searchingProduct)) {
            toast.success("Item adicionado com sucesso!");
            setCurrentSale([...currentSale, searchingProduct]);
            searchingProduct.count = 1;
        } else {
            toast.success(
                `Mais um ${searchingProduct.name} adicionado com sucesso!`
            );

            searchingProduct.count++;
            setCurrentSale([...currentSale]);
        }
    }

    function removeItemCart(idProduct) {
        const filteringCard = currentSale.filter(
            (item) => item.id !== idProduct
        );
        setCurrentSale(filteringCard);
    }

    return (
        <div className="App">
            <div>
                <Toaster position="top-center" reverseOrder={false} />
            </div>
            <main className="app__wrapper">
                <Header
                    showProducts={showProducts}
                    setFilterInput={setFilterInput}
                />
                <section>
                    <ProductsList
                        handleClick={handleClick}
                        filterInput={filterInput}
                        filteredProducts={filteredProducts}
                        products={products}
                    />
                    <Cart
                        removeItemCart={removeItemCart}
                        setCurrentSale={setCurrentSale}
                        setCartTotal={setCartTotal}
                        currentSale={currentSale}
                    />
                </section>
            </main>
        </div>
    );
}

export default App;
