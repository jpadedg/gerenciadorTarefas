import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tarefas from './views/Tarefas/Tarefas'
import Excluir from './views/Excluir/Excluir'
import Editar from './views/Editar/Editar'

const App = () => {
  return (
    <div className='App' >
      <Routes>
        <Route path="/" element={<Tarefas/>} />
        <Route path="/Edit/:tarefa" element={<Editar/>} />
        <Route path="/Excluir/:tarefa" element={<Excluir/>} />
      </Routes>
    </div>
  )
}

export default App
