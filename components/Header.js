import styles from "@/styles/Header.module.css"
import Link from "next/link"

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <Link href="/">
                Noticias deportivas
            </Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link href="/news">Noticias</Link>
                </li>
                <li>
                    <Link href="/news/add">Añadir Noticia</Link>
                </li>
                <li>
                    <Link href="/about">Sobre Nosotros</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
