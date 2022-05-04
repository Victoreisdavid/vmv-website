import "../styles/global.css";

import Navbar from "../components/navbar.js"
import Footer from "../components/footer.js"

export default function App({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <div id="container">
                <Component {...pageProps} />
            </div>
            <Footer />
        </>
    )
}