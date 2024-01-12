import styled from "@emotion/styled"

const LabelEstilizada = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
`

const InputEstilizado = styled.input`
    display: block;
    width: 100%;
    margin: ${props => props.theme.espacamentos.xs} 0px ${props => props.theme.espacamentos.m};
    background:  ${props => props.theme.cores.branco};
    height: 40px;
    border-radius: ${props => props.theme.espacamentos.s};
    border: 1px solid;
    border-color:  ${props => props.theme.cores.neutras.a};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: ${props => props.theme.cores.neutras.a};
    padding: 0px ${props => props.theme.espacamentos.s};
    box-sizing: border-box;
`

export const CampoTexto = ({ titulo }) => {
    return (<LabelEstilizada>
        {titulo}
        <InputEstilizado />
    </LabelEstilizada>)
}