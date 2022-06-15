import Style from "../styles/footer.module.css";

export default function Footer() {
    return <footer id={Style.footer}>
        <h2>VMV &copy;</h2>
        <div id={Style.links}>
            <a href="#">Suporte</a>
            <a href="#">Termos de uso</a>
            <a href="#">Privacidade</a>
        </div>
        <p>VMV. Plataforma especializada em viagens para pontos históricos da Grécia.</p>
        <br />
        <p>* Isto NÃO é um site profissional.</p>
    </footer>
}