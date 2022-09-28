import logo from "../../assets/logo.png";

export function Header() {
    return (
        <header>
            <img src={logo} alt="Logo BurguerKenzie" />
            <div>
                <input placeholder="Digitar Pesquisa" type="text" />
                <button>Pesquisar</button>
            </div>
        </header>
    );
}
