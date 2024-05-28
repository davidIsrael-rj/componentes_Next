import Link from "next/link";
import styles from "@/styles/Navegador.module.css"

export default function Navegador(props) {
    return (
        <div className={styles.navegador}
            // style={{
            //     backgroundColor:props.cor ?? 'dodgerblue'
            
            // }}
        >

            <Link href={props.link}>
                {props.nome}
            </Link>

        </div>
    )
}