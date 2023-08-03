import React, { useState } from 'react'
import Row from '../Row/Row';
import "./index.scss" 
import { TAREFAS_MOCK } from '../../mock/tarefas.mock.js'

const Table = () => {

  const [novaTarefa, setNovaTarefa] = useState(['']);
  const listaTarefas  = [];
  
  TAREFAS_MOCK.map((tarefa) => {
    listaTarefas.push(tarefa.titulo);
  })
  console.log(listaTarefas);
  
  const [tarefas, setTarefas] = useState(listaTarefas);


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
      setTarefas(newTarefas);
      setNovaTarefa('');
    }

  return (
    <div className='container'>
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
              
              tarefas.map( (tarefa,index) => <Row key={index} tarefa={tarefa}  />  )
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
