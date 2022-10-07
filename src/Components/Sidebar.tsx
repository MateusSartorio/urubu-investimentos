import React, { useState } from "react";

import { BotaoGenerico } from "./BotaoGenerico"

interface propsType {
    classe: string;
}

export const Sidebar = (props: propsType) => {
    const { classe } = props;
    
    return(
        <div id="sidebar" className={classe}>
            <a
                id="parceiro-oficial"
                href="https://www.flamengo.com.br/"
                target="_blank"
                rel="noreferrer"
            >
                <p>Parceiro Oficial</p>
                <img src="/images/flamengo-logo-2020.svg" alt="Logo do Flamengo" />
            </a>

            <BotaoGenerico
                texto="💵 Ganhe $ Grátis"
                href="#"
                fundo={true}
                callback={() => null}
            />
        </div>
    );
}