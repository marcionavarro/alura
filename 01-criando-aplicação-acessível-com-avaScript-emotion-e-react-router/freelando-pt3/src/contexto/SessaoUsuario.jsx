import { useContext } from "react";
import http from "../http";
import { ArmazenadorToken } from "../utils/ArmazenadorToken";

const { createContext } = require("react");

const SessaoUsuarioContext = createContext({
    usuarioEstaLogado: false,
    login: (email, senha) => null,
    logout: () => null,
    perfil: {},
})

export const UseSessaoUsuarioContext = () => {
    return useContext(SessaoUsuarioContext);
}

export const SessaoUsuarioProvider = ({ children }) => {

    const login = (email, senha) => {
        http.post('auth/login', { email, senha })
            .then((resposta) => {
                ArmazenadorToken.definirToken(
                    resposta.data.access_token,
                    resposta.data.refresh_token
                )
            })
            .catch((error) => console.log(error))
    }

    const value = {
        login
    }

    return <SessaoUsuarioContext.Provider value={value}>{children}</SessaoUsuarioContext.Provider>
}

