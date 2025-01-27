/** @jsxImportSource @emotion/react */


import { css } from "@emotion/react";


export const containerAdicaoTarefas = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    
`;
export const adicionarTarefas = css`
    padding: 6px 8rem;
    border-radius: 6px;
    border: 1px solid black;
    text-align: center;
`;
export const botaoAdiconarTarefa = css`
    background: #1F78B4;
    border: none;
    cursor: pointer;
    padding: .40rem 5rem;
    border-radius: 6px;   
    color: white;   
`;

export const containerPrincipal = css`
    list-style: none;
    margin: 2rem 12rem; 
    padding: 10px;
    border: 1.5px solid #FFD700;
    border-radius: 12px;
    text-align: center;
`;

export const itemTarefas = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    background-color: #313131;
    padding: 10px;
    border-radius: 5px;
    flex-wrap: wrap;
    gap: 2rem;
    margin: 1.5rem 3rem;

    :nth-child(2n) {
        background-color: #1a1a1a;
    }
`;

export const containerTarefas = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const campoEdicao = css`
    display: flex;
    justify-content: space-around;
    gap: 5rem;
`;


export const containerIcones = css`
    display: flex;
    gap: 3rem; 
    align-items: center;
`;

export const botaoImagen = css`
    background: none;
    border: none;
    cursor: pointer;

    img {
        width: 20px;
        height: 20px;
    }
`

export const botaoCancelar = css`
    background: #A71D2A;
    border: none;
    cursor: pointer;
    padding: 2px 20px;
    border-radius: 6px;        
    color: #ffffff;
`

export const botaoConfirmar = css`
    background: #1C7A33;
    border: none;
    cursor: pointer;
    padding: 2px 20px;
    border-radius: 6px;   
    color: #ffffff;
`

export const switchStyle = css`

   
;
`