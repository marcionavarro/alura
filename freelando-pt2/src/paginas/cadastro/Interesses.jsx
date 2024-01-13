import { useState } from "react";
import GrupoRadio from "../../componentes/Radio/GrupoRadio";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { Col, Row } from "react-grid-system";
import { Botao } from "../../componentes/Botao/Botao";
import { Link } from "react-router-dom";

const opcoes = [
    {
        valor: 1,
        label: "TI e Programação"
    },
    {
        valor: 2,
        label: "Design e Multimídia"
    },
    {
        valor: 3,
        label: "Revisão"
    },
    {
        valor: 4,
        label: "Tradução"
    },
    {
        valor: 5,
        label: "Transição"
    },
    {
        valor: 6,
        label: "Marketing"
    },
]

const Interesses = () => {
    const [opcao, setOpcao] = useState('');
    return (
        <div style={{ textAlign: 'center' }}>
            <Tipografia variante="h1" componente="h1">
                Crie seu cadastro
            </Tipografia>
            <Tipografia variante="h2" componente="h2">
                Qual a área de interesse?
            </Tipografia>
            <GrupoRadio opcoes={opcoes} opcao={opcao} onChange={setOpcao} />
            <Row justify="between" style={{ marginTop: '20px' }}>
                <Link to='/cadastro'>
                    <Botao variante="secundaria">
                        Anterior
                    </Botao>
                </Link>
                <Link to='/cadastro/dados-pessoais'>
                    <Botao>
                        Próxima
                    </Botao>
                </Link>
            </Row>
        </div>
    )
}

export default Interesses;