import Head from "next/head";

import Home from "../styles/home.module.css";

export default function About() {
    return (
        <>
            <Head>
                <title>VMV - Sobre nós</title>
            </Head>
            <main>
                <div className={Home.flex_container}>
                    <div className={Home.big_box}>
                        <h1>Bom, <span className="yellow">quem somos nós?</span></h1>
                        <p>A VMV nasceu com intuíto de <span className="blue">proporcionar viagens para pontos históricos da Grécia.</span> Nós oferecemos viagens para cidades históricas como Atenas com um preço super reduzido.</p>
                        <h2 style={{ textAlign: "left" }}>Já percebeu como os <span className="yellow">preços são altos?</span></h2>
                        <p>Isso é porque lá você ainda vai precisar de um hotel para se hospedar, além de comida, dinheiro para comprar coisas lá, e aqui no Brasil terá de gastar com seguro de viagem e outras coisas.</p>
                        <p>Nosso objetivo é oferecer tudo isso com um preço menor do que a média, para que viagens desse tipo sejam mais acessíveis.</p>
                        <h2 style={{ textAlign: "left" }}>Porque vale apena viajar para esses lugares?</h2>
                        <p>Existe muita <span className="blue">cultura</span> e <span className="blue">história</span> nesses locais, você pode ver como o nosso mundo era no passado através desses locais históricos espalhados por todo o mundo.</p>
                    </div>
                </div>
            </main>
        </>
    )
}