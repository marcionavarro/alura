import React from "react";
import { Botao, Box } from "../UI";
import { extratoLista } from "../../info.js";
import Items from "../Items/index.jsx";

const Extrato = () => {
    return (
        <Box>
            {extratoLista.updates.map(({ id, type, value, date, from }) => {
                return (
                    <Items key={id} type={type} value={value} date={date} from={from} />
                )
            })}
            <Botao>Ver mais</Botao>
        </Box>
    )
}

export default Extrato;