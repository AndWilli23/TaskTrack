/** @jsxImportSource @emotion/react */


import { containerCabecalho, listaCabecalho, itemCabecalho, linkCabecalho, cabecalhoFundo } from "./cabecalho.style"
import { Link } from "react-router-dom"


const Cabecalho = () => { 
    return (
        <>
            <header css={containerCabecalho}>
                <nav css={cabecalhoFundo}>
                    <ul css={listaCabecalho}>
                        <li css={itemCabecalho}>
                            <Link style={{color: "#ffffff", textDecoration: "none"}} to={"/"} css={linkCabecalho}>ToDoList</Link>
                        </li>
                        <li css={itemCabecalho}>
                            <Link style={{color: "#ffffff", textDecoration: "none"}} to={"/Calendario"} css={linkCabecalho}>Agenda</Link>
                        </li>
                    </ul>

                </nav>
                
            </header>
        </>
    )
}

export default Cabecalho

