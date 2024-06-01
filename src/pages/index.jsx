import Navegador from "@/components/Navegador";

export default function Inicio(props) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: "20px",
            height: '100vh'
        }}>
            <div>
                <Navegador link="/estiloso" nome="Estiloso" />
                <Navegador link="/exemplo" nome="Exemplo" />
                <Navegador link="/jsx" nome="JSX" />
                <Navegador link="/navegacao" nome="Navegação" />

            </div>
            <div>
                <Navegador link="/cliente/Mage/123" nome="Naveção Dinâmica" />
                <Navegador link="/estado" nome="Estado" />
                <Navegador link="/integracao_1" nome="Integração #01" />
                <Navegador link="/estatico" nome="Estático" />
                <Navegador link="/dinamico" nome="Não Estático" />


            </div>
        </div>
    )
}