import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from "react-router-dom";
import './index.scss'
import Tarefas from './views/Tarefas/Tarefas'
import Editar from './views/Editar/Editar'
import Excluir from './views/Excluir/Excluir'
import { TAREFAS_MOCK } from "./mock/tarefas.mock.js"
import App from './App';

/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Tarefas/>,
  },
  {
    path: "/Edit/:tarefa",
    element: <Editar/>,
  },
  {
    path: '/Excluir/:tarefa',
    element: <Excluir/>,
  }
]);*/


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
