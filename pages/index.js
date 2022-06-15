import Head from "next/head";
import Img from "next/image";

import Home from "../styles/home.module.css";

export default function Index() {
    return (
        <>
            <Head>
                <title>VMV - Pontos turísticos da Grécia</title>
            </Head>
            <main>
                <div className={Home.flex_container}>
                    <h1>Quer ir para a <span className="yellow">Grécia?</span></h1>
                </div>
                <div className={Home.flex_container}>
                    <h2>Na VMV, você tem:</h2>
                </div>
                <div className={Home.flex_container}>
                    <div className={Home.box}>
                        <i className="fa-solid fa-coins fa-5x blue" />
                        <h2>Preços baixos</h2>
                    </div>
                    <div className={Home.box}>
                        <i className="fa-solid fa-circle-check fa-5x blue" />
                        <h2>Confiança</h2>
                    </div>
                    <div className={Home.box}>
                        <i className="fa-solid fa-brazilian-real-sign fa-5x blue" />
                        <h2>Reembolso</h2>
                    </div>
                </div>
                <div style={{ marginBottom: "50px" }} />
                <div className={Home.flex_container}>
                    <h2><span className="blue">Curtiu?</span> <span className="yellow">Então arrasta pra baixo!</span></h2>
                </div>
                <div className={Home.flex_container}>
                    <div className={Home.big_box}>
                        <h1>Destinos e preços</h1>
                        <p style={{ textAlign: "center" }}>Interessado em viajar? Então veja aqui os preços e destinos para sua próxima viagem.</p>
                        <div className={Home.flex_container}>
                            <div className={Home.box}>
                                <h1>Atenas</h1>
                                <h2><i className="fa-solid fa-brazilian-real-sign" /> 3500,00</h2>
                                <Img 
                                    src="/images/Atenas.jpg"
                                    layout="responsive"
                                    width={200}
                                    height={200}
                                    quality={100}
                                    alt="Foto de Atenas, na Grécia."
                                    className={Home.img_rounded}
                                />
                            </div>
                            <div className={Home.box}>
                                <h1>Fira</h1>
                                <h2><i className="fa-solid fa-brazilian-real-sign" /> 3100,00</h2>
                                <Img 
                                    src="/images/Fira.jpg"
                                    layout="responsive"
                                    width={200}
                                    height={200}
                                    quality={100}
                                    alt="Foto de Fira, na Grécia."
                                    className={Home.img_rounded}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </main>
        </>
    )
}