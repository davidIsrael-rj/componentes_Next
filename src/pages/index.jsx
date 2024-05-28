import Navegador from "@/components/Navegador";
import Link from "next/link";

export default function Inicio(props) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador link="/estiloso" nome="Estiloso"/>
            <Navegador link="/exemplo" nome="Exemplo"/>
            <Navegador link="/jsx" nome="JSX"/>
        </div>
    )
}