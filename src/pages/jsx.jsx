import Layout from "@/components/Layout"

export default function Jsx() {
    const titulo = <h1>JSX é um Conceito Central</h1>

    function subtitulo() {
        return <h2>{"transformando em maiúscula".toUpperCase()}</h2>
    }
    return (
        <Layout titulo={titulo}>
            <div>
                {titulo}
                {subtitulo()}
                <p>
                    {JSON.stringify({ nome: 'João', idade: 30 })}
                </p>
            </div>
        </Layout>
    )
}