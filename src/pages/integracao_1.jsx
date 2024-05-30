import Layout from "@/components/Layout";
import { useState } from "react";

export default function Integracao() {
    const [cliente, setCliente] = useState({})
    const [cod, setCod] = useState(0)

    async function obterCliente() {
        const resp = await fetch(`http://localhost:3000/api/clientes/${cod}`)
        const dados = await resp.json()
        setCliente(dados)

    //     fetch(`http://localhost:3000/api/clientes/${cod}`)
    //         .then(resp => resp.json())
    //         .then(dados => setCliente(dados))
    }
    return (
        <Layout titulo="Integração">
            <div>
                <input type="number" value={cod} onChange={e => setCod(e.target.value)} />
                <button onClick={obterCliente}>Obter Cliente</button>
            </div>
            {/* {dados.nome} */}
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )
}