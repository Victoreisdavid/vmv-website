import Head from "next/head";
import Img from "next/image";
import Link from "next/link";

import IMG01 from "../public/images/lugar-historico01.jpg";
import IMG02 from "../public/images/lugar-historico02.jpg";
import IMG03 from "../public/images/lugar-historico03.jpg";

import Style from "../styles/home.module.css";

export default function Index() {
    return (
        <>
            <Head>
                <title>Bem-vindo à VMV!</title>
            </Head>
            <div id="content">
                <header>
                    <h1><span>Vem conhecer a história da Grécia.</span> Sem pagar um absurdo.</h1>
                </header>
                <main id={Style.main}>
                    <div id={Style.content}>
                        <h2>O que é?</h2>
                        <p>VMV é uma plataforma que oferece viagens para <strong>pontos históricos da grécia</strong> com preços baixos e boas condições.</p>
                        <p>Começe agendando conosco uma viagem para conhecer lugares incríveis!</p>
                        <div className={Style.images}>
                            <div className={Style.img_container}>
                                <div className={Style.img_div}>
                                    <Img 
                                        src={IMG01}
                                        width={420}
                                        height={420}
                                        quality={100}
                                        decoding="async"
                                        alt="Lugar histórico"
                                        className={Style.img}
                                    />
                                    <p>Foto tirada por <Link href="https://unsplash.com/photos/wWx65wVFlBs?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"><a target="_blank">Simon Maage</a></Link></p>
                                </div> 
                            </div>
                            <div className={Style.img_container}>
                                <div className={Style.img_div}>
                                    <Img 
                                        src={IMG02}
                                        width={420}
                                        height={420}
                                        quality={100}
                                        decoding="async"
                                        alt="Lugar histórico"
                                        className={Style.img}
                                    />
                                    <p>Foto tirada por <Link href="https://unsplash.com/photos/RtAGVExbNgQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"><a target="_blank">Michael Baccin</a></Link></p>
                                </div> 
                            </div>
                            <div className={Style.img_container}>
                                <div className={Style.img_div}>
                                    <Img 
                                        src={IMG03}
                                        width={420}
                                        height={420}
                                        quality={100}
                                        decoding="async"
                                        alt="Lugar histórico"
                                        loading="eager"
                                        className={Style.img}
                                    />
                                    <p>Foto tirada por <Link href="https://unsplash.com/photos/Bc1UzjUw4Yg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"><a target="_blank">Daniela Poli</a></Link></p>
                                </div> 
                            </div>   
                        </div>
                    </div>
                </main>
            </div>
            <style jsx global>{`
                body {
                    background-image: url("/images/background.jpg");
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    background-color: rgba(51, 51, 51, 0.562);
                }
                nav {
                    background-color: rgba(0, 0, 0, 0.445);
                }
                main {
                    max-width: none;
                    width: 100%;
                }
            `}</style>
        </>
    )
}