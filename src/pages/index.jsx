import Navegador from "@/components/Navegador";

export default function Inicio(props) {
    return (
        <div style={{
            display: 'flex',
            flexDirection:"column",
            justifyContent: 'flex-start',
            alignItems:'center',
            flexWrap: 'wrap',
            padding:"20px",
            height: '100vh'
        }}>
            <Navegador link="/estiloso" nome="Estiloso"/>
            <Navegador link="/exemplo" nome="Exemplo"/>
            <Navegador link="/jsx" nome="JSX"/>
            <Navegador link="/navegacao" nome="Navegação"/>
            <Navegador link="/cliente/Mage/123" nome="Naveção Dinâmica"/>
        </div>
    )
}