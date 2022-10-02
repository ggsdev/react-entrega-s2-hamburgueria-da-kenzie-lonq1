import logo from "../../assets/logo.png";
import { HeaderContainer } from "./style.js";

export function Header({ setFilterInput, showProducts }) {
    return (
        <HeaderContainer>
            <div className="header__container">
                <img src={logo} alt="Logo BurguerKenzie" />
                <form
                    onSubmit={(event) => showProducts(event.preventDefault())}
                >
                    <input
                        onChange={(event) => setFilterInput(event.target.value)}
                        placeholder="Digitar Pesquisa"
                        type="text"
                    />

                    <button className="btn-default" type="submit">
                        Pesquisar
                    </button>
                </form>
            </div>
        </HeaderContainer>
    );
}
