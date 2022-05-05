import Head from "next/head";
import Style from "../styles/404.module.css";

export default function NotFound() {
    return (
        <>
            <Head>
                <title>404 - Página não encontrada</title>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <div id={Style.content}>
                <h1>404 - Página não encontrada</h1>
                <p>A página que você procura não existe.</p>
            </div>
            <style jsx global>{`
                nav a {
                    color: #333 !important;
                }
            `}</style>
        </>
    )
}