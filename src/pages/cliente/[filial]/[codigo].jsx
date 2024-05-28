import Layout from "@/components/Layout";
import { useRouter } from 'next/router'

export default function ClientePorCodigo() {
    const router = useRouter()
    return (
        <Layout titulo="Navegação Dinâmica">
            <h1>Filial = {router.query.filial}</h1>
            <h1>Código = {router.query.codigo}</h1>
        </Layout>
    )
}