import Layout from "@/components/Layout";
import styles from '@/styles/estado.module.css'

import { useState } from "react";

export default function Estado() {
    
    const [num, setNum] = useState(0)

    function incrementar() {
        setNum(num + 1)
    }
    return (
        <Layout titulo="Componente com Estado">
            <div className={styles.estado}>
                <div>{num}</div>
                <button onClick={incrementar}>Incrementar</button>
            </div>
        </Layout>
    )
}