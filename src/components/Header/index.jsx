import logo from "../../assets/logo.png";
import { Header } from "./style.js";

export function HeaderC({ setFilterInput, showProducts }) {
    return (
        <Header>
            <img src={logo} alt="Logo BurguerKenzie" />
            <form onSubmit={(event) => showProducts(event.preventDefault())}>
                <input
                    onChange={(event) => setFilterInput(event.target.value)}
                    placeholder="Digitar Pesquisa"
                    type="text"
                />

                <button type="submit">Pesquisar</button>
            </form>
        </Header>
    );
}
