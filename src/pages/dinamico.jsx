import Layout from "@/components/Layout";

export function getServerSideProps() {
    return {
        props: {
            numero2: Math.random()
        }
    }
}

export default function Dinamico(props) {
    return (
        <Layout titulo="Conteúdo Não Estático">
            <div>{props.numero2}</div>
        </Layout>
    )
}