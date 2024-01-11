import styled from "@emotion/styled";

const componentes = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p',
}

const estilos = {
    h1:`
        font-size: 40px;
        font-weight: 600;
        line-height: 49px;
    `,
    h2:`
        font-size: 32px;
        font-weight: 600;
        line-height: 39px;
    `,
    h3:`
        font-size: 24px;
        font-weight: 500;
        line-height: 29px;
    `,
    body:`
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
    `,
    bodybold:`
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
    `,
    body2:`
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
    `,
    bodybold2:`
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
    `,
    subtitle:`
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;    
    `,
    subtitle2:`
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
    `
}

export const Tipografia = ({ variante, componente, children }) => {
    const tag = componentes[componente];
    const ComponenteUtilizado = styled[tag]`${estilos[variante]}`;

    return (<ComponenteUtilizado>
        {children}
    </ComponenteUtilizado>)

}