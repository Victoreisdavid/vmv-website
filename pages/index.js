import Head from "next/head";
import Img from "next/image";
import Link from "next/link";

import IMG01 from "../public/images/lugar-historico01.jpg";
import IMG02 from "../public/images/lugar-historico02.jpg";
import IMG03 from "../public/images/lugar-historico03.jpg";
import IMG04 from "../public/images/lugar-historico04.jpg";
import IMG05 from "../public/images/lugar-historico05.jpg";
import IMG06 from "../public/images/lugar-historico06.jpg";

import { useEffect } from "react";

import Style from "../styles/home.module.css";

export default function Index() {
    useEffect(() => {
        const images = [...document.querySelectorAll(`.${Style.img_container}`)]
        for(const image of images) {
            image.onmouseover = () => {
                images.forEach(i => i.style.animationPlayState = "paused")
            }

            image.onmouseleave = () => {
                images.forEach(i => i.style.animationPlayState = "running")
            }
        }
    }, [])
    return (
        <>
            <Head>
                <title>Bem-vindo à VMV!</title>
            </Head>
            <div id="content">
                <header>
                    <h1><span className="color-yellow">Vem conhecer a história da Grécia.</span> Sem pagar um absurdo.</h1>
                    <h2>Lugares únicos que <span className="color-yellow">você nunca irá esquecer.</span></h2>    
                </header>
                <main id={Style.main}>
                    <br />
                    <div className={Style.cards}>
                        <h2 className="center">Na VMV, você tem</h2>
                        <div className={Style.card}>
                            <i className="fa-solid fa-plane fa-4x"/>
                            <h2>Sua viagem com preço baixo</h2>
                            <p>Oferecemos viagens com ótimas condições e preços realmente baixos.</p>
                            <ul>
                                <li>Cabe no seu bolso</li>
                                <li>Boas condições</li>
                                <li>Segurança</li>
                                <li>Reembolso caso um problema nosso te impeça de viajar</li>
                            </ul>
                        </div>
                        <div className={Style.card}>
                            <i className="fa-solid fa-book fa-4x"/>
                            <h2>Lugares incríveis</h2>
                            <p>Pontos históricos da Grécia contam histórias incríveis e únicas sobre tradições e costumes gregos.</p>
                            <ul>
                                <li>Experiência única</li>
                                <li>Passeio com historiadores</li>
                                <li>Principais pontos históricos da Grécia</li>
                                <li>Conhecimento da cultura Grega</li>
                            </ul>
                        </div>
                    </div>
                    <div id={Style.white_bg}>
                        <h2 className="center">Lugares que contam história só de olhar!</h2>
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
                            <div className={Style.img_container}>
                                <div className={Style.img_div}>
                                    <Img 
                                        src={IMG04}
                                        width={420}
                                        height={420}
                                        quality={100}
                                        decoding="async"
                                        alt="Lugar histórico"
                                        loading="eager"
                                        className={Style.img}
                                    />
                                    <p>Foto tirada por <Link href="https://unsplash.com/photos/5FgW8hH8NDc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"><a target="_blank">Travel Captures</a></Link></p>
                                </div> 
                            </div>
                            <div className={Style.img_container}>
                                <div className={Style.img_div}>
                                    <Img 
                                        src={IMG05}
                                        width={420}
                                        height={420}
                                        quality={100}
                                        decoding="async"
                                        alt="Lugar histórico"
                                        loading="eager"
                                        className={Style.img}
                                    />
                                    <p>Foto tirada por <Link href="https://unsplash.com/photos/N-Z_BKWEcmI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"><a target="_blank">Marco Montero Pisani</a></Link></p>
                                </div> 
                            </div>
                            <div className={Style.img_container}>
                                <div className={Style.img_div}>
                                    <Img 
                                        src={IMG06}
                                        width={420}
                                        height={420}
                                        quality={100}
                                        decoding="async"
                                        alt="Lugar histórico"
                                        loading="eager"
                                        className={Style.img}
                                    />
                                    <p>Foto tirada por <Link href="https://unsplash.com/photos/3iJpGG5vRgI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"><a target="_blank">Cristina Baronchelli</a></Link></p>
                                </div> 
                            </div>
                        </div>
                        <p className="tiny">* Essas fotos são livres e foram encontradas em <Link href="https://unsplash.com/"><a target="_blank">unsplash.com</a></Link></p>
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