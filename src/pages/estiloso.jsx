import Layout from "@/components/Layout"
import styles from "@/styles/Estiloso.module.css"

export default function Estiloso() {
    return (
        <Layout titulo="Exemplo de CSS Modularizado">
            <div className={styles.roxo}>
                <h1>Estiloso</h1>
                <h2>Estilo usando CSS Módulos</h2>
            </div>
        </Layout>
    )
}