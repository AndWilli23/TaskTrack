/** @jsxImportSource @emotion/react */


import { 
adicionarTarefas,containerAdicaoTarefas, botaoAdiconarTarefa, 

} from './App.style';


const AddTarefa = ({novaTarefa, setNovaTarefa, adicionarTarefa}) => {
    return(
        <>
             <div css={containerAdicaoTarefas}>

                <div> 
                    <label htmlFor="tarefa"></label>
                        <input css={adicionarTarefas} type="text" 
                        value={novaTarefa}
                        id="tarefa"
                        onKeyDown={(e) => e.key === 'Enter' && adicionarTarefa()} 
                        onChange={(e) => (setNovaTarefa(e.target.value))} 
                        placeholder='Informe a tarefa:'
                        />
                </div>

                <div>
                    <button css={botaoAdiconarTarefa} onClick={adicionarTarefa}>Adicionar tarefa</button>
                </div>
            </div> 
        </>
    )

}

export default AddTarefa