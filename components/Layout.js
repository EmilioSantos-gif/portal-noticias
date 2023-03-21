import Head from "next/head";
import styles from "@/styles/Layout.module.css"
import Header from "./Header"
import Footer from "./Footer";

import Hero from "./Hero"
import { useRouter } from "next/router";

export default function Layout({title, keywords, description, children}){
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="descriptions" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <Header />
            {router.pathname === "/" && <Hero />}
            <div className={styles.container}>{children}</div>
            <Footer />
        </div>
    );
}

Layout.defaultProps = {
    title: "Noticias deportivas | Las últimas noticias sobre deportes",
    description: "Un portal que te brinda las noticias deportivas más actualizadas",
    keywords: "football, basketball, beisbol",
};