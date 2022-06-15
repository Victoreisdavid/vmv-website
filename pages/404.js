import Head from "next/head";

import Home from "../styles/home.module.css"

export default function NotFound() {
    return (
        <>
            <Head>
                <title>Página não encontrada</title>
            </Head>
            <main>
                <div className={Home.flex_container} style={{ marginTop: "25vh" }}>
                    <h1>404 | Página não encontrada</h1>
                </div>
            </main>
        </>
    )
}