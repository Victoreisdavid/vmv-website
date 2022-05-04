import Style from "../styles/navbar.module.css";

export default function NavBar() {
    return (
        <nav id={Style.navbar}>
            <a href="/">VMV</a>
            <a href="/about">Sobre nós</a>
        </nav>
    )
}