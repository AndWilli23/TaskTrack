/** @jsxImportSource @emotion/react */

import { useState, useEffect } from 'react'
import lapis from "../../assets/lapis.png"
import lixeira from "../../assets/lixeira.png"
import { 
botaoImagen, containerTarefas,itemTarefas, containerIcones, 
botaoConfirmar, botaoCancelar, campoEdicao, 
} from "./App.style";
import AddTarefa from './AddTarefa';
import Cabecalho from '../../layout/cabecalho';
import "./app.css"
import {Form} from "react-bootstrap"



function App() {

    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState("");
    const [estadoTarefaConcluida, setTarefaFeita] = useState([]);
    const [estadoTarefaEditada, setTarefaEditada] = useState("");
    const [indiceParaEdicao, setIndiceParaEdicao] = useState(null);
    

    useEffect(() => {
      const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
      const tarefasFeitasSalvas = JSON.parse(localStorage.getItem('tarefaFeita')) || [];
      setTarefas(tarefasSalvas);
      setTarefaFeita(tarefasFeitasSalvas);
    }, []);

    const adicionarTarefa = () => {
      if(novaTarefa.trim() === '') return;
      if(novaTarefa.length <= 50){
        const novasTarefas = [...tarefas, novaTarefa]; 
        setTarefas([novaTarefa, ...tarefas]);
        setNovaTarefa('');
        setTarefaFeita([...estadoTarefaConcluida, false]);
        localStorage.setItem('tarefas', JSON.stringify(novasTarefas));  
        localStorage.setItem('tarefaFeita', JSON.stringify([...estadoTarefaConcluida, false]));
      } else{
        alert("a tarefa deve ter menos de 50 caracteres");
        setNovaTarefa('');
      }
    }

    const removeTarefa = (indice) => {

      const novasTarefas = tarefas.filter((_, i) => i !== indice);
      setTarefas(novasTarefas);

      const novasTarefasFeitas = estadoTarefaConcluida.filter((_, i) => i !== indice);
      setTarefaFeita(novasTarefasFeitas);

      localStorage.setItem('tarefas', JSON.stringify(novasTarefas));
      localStorage.setItem('tarefaFeita', JSON.stringify(novasTarefasFeitas));
    }

    const verificarTarefaFeita = (index) => {
      const novasTarefasFeitas = [...estadoTarefaConcluida];
      novasTarefasFeitas[index] = !novasTarefasFeitas[index];
      setTarefaFeita(novasTarefasFeitas);

  localStorage.setItem('tarefaFeita', JSON.stringify(novasTarefasFeitas));
      
    }

    const selecionarTarefaParaEdicao = (index, tarafaAtual) => {
      setIndiceParaEdicao(index);
      setTarefaEditada(tarafaAtual);
    }

    const editarTarefa = () => {
      if(estadoTarefaEditada.trim() === '') return;
      const novaTarefa = [...tarefas];
      novaTarefa[indiceParaEdicao] = estadoTarefaEditada;
      setTarefas(novaTarefa);;
      setIndiceParaEdicao(null);
      setTarefaEditada("");
    }

    return (
      <>
      <Cabecalho/>
        <AddTarefa 
            novaTarefa={novaTarefa} 
            setNovaTarefa={setNovaTarefa} 
            adicionarTarefa={adicionarTarefa} 
        />
        
        <div className="containerPrincipal">
          <h2 style={{color: "#ffffff"}}>Tarefas: </h2>
          {tarefas.map((tarefa, index) => (

            <ul css={itemTarefas} key={index}>
              {indiceParaEdicao === index ? (
                <>
                  <li css={campoEdicao}>
                    <input type='text' 
                      value={estadoTarefaEditada}
                      id="tarefa" 
                      onChange ={(e) => (setTarefaEditada(e.target.value))}
                      placeholder='editar tarefa'/>
                    <button css={botaoConfirmar} onClick={editarTarefa}>confirmar</button>
                    <button css={botaoCancelar} onClick={() => setIndiceParaEdicao(null)}>cancelar</button>
                  </li>
                </>
                
              ):(
                <>
                <li css={containerTarefas}>
                  <div className=''>
                    <p className="NomeTarefa"  style={{
                          color: estadoTarefaConcluida[index] ? "grey" : "white",
                          fontStyle: estadoTarefaConcluida[index] ? "italic" : "normal",
                          textDecoration: estadoTarefaConcluida[index] ? "line-through" : "none",
                        }}>
                        {tarefa}
                     </p>
                  </div>
              
                  <div css={containerIcones}>
                  <Form>
                    <Form.Check 
                      type="switch"
                      id="custom-switch"
                      checked={!!estadoTarefaConcluida[index]}
                      onChange={()=> verificarTarefaFeita(index )}
                    />
                  </Form>
                        <button css={botaoImagen} onClick={() => removeTarefa(index)}><img src={lixeira}></img></button>
                        <button css={botaoImagen} onClick={() => selecionarTarefaParaEdicao(index, tarefa)}><img src={lapis}></img></button>
                  </div>
                </li>
                
                </>
              )}  
            </ul>
          ))}
        </div>
      </>
    )
}

export default App
