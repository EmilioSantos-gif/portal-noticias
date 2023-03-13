import {FaExclamationTriangle} from 'react-icons/fa'
import Layout from '../components/Layout'
import styles from "@/styles/404.module.css"
import Link from 'next/link'

export default function NotFound() {
  return (
    <Layout title="Página no encontrada">
        <div className={styles.error}>
            <h1>
                <FaExclamationTriangle /> 404
            </h1>
            <h4>Ooopss, esto es penoso...</h4>
            <Link href="/">Volver a la página principal</Link>
        </div>
    </Layout>
  )
}
