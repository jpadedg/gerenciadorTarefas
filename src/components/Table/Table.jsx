import React, { useEffect, useState } from 'react'
import Row from '../Row/Row';
import "./index.scss" 
import { TAREFAS_MOCK } from '../../mock/tarefas.mock.js'
import checkedImg from "../../assets/checkUnlock.png"

const Table = () => {

  const [novaTarefa, setNovaTarefa] = useState(['']);
  const listaTarefas  = [];
  const [tarefas, setTarefas] = useState(listaTarefas);
  const [concluidas, setConcluidas] = useState(0);
  const [total, setTotal] = useState(TAREFAS_MOCK.length);
  
  
  TAREFAS_MOCK.map((tarefa) => {
    listaTarefas.push(tarefa.titulo);
  }, [])
  
  

    const handleChange = (event) => {
      setNovaTarefa(event.target.value);
    }

    const handleKeyDown = (event) => {
      console.log('User pressed: ', event.key);
      if(event.key === 'Enter'){
        this.adicionar();
      }
    }

    function adicionar() {
      const newTarefas = [...tarefas, novaTarefa];
      setTotal(total+1);
      setTarefas(newTarefas);
      setNovaTarefa('');
    }

  return (
    <div className='container'>

      <h1 className='checkeds'>Concluidos {concluidas}/{total}</h1>
      <div className='table'>
        <table>
          <thead>
            <tr>
                <th>Tarefa</th>
                <th className='center'>Status</th>
                <th className='right'>Opções</th>
            </tr>
          </thead>
        </table>

        <div className='table__border'></div>

        <table>
          <tbody className='table__rows'>
            
            {tarefas && (

              tarefas.map( (tarefa,index) => <Row key={index} tarefa={tarefa} check={(checked) => {
                if(checked === checkedImg){
                  setConcluidas(concluidas+1);
                } else {
                  setConcluidas(concluidas-1);
                }
              }}  />  )
              )
            }
                 
          </tbody>
        </table>
      </div>

      <div className='table__new'> 
        <input type="text" placeholder='Nova tarefa...' onChange={handleChange} value={novaTarefa} />
        <h1 onClick={adicionar} onKeyDown={handleKeyDown} onKeyUp={handleKeyDown}  >+</h1>
      </div>
    </div>
  )
}

export default Table
