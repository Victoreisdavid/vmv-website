import Link from "next/link";

import Style from "../styles/navbar.module.css";

export default function NavBar() {
    return (
        <nav id={Style.navbar}>
            <Link href="/"><a>VMV</a></Link>
            <Link href="/about"><a>Sobre nós</a></Link>
        </nav>
    )
}