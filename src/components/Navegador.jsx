import Link from "next/link";
import styles from "@/styles/Navegador.module.css"

export default function Navegador(props) {
    return (
        <Link href={props.link}>
            <div className={styles.navegador}>

                {props.nome}

            </div>
        </Link>
    )
}