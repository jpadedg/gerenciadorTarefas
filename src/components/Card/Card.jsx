import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "./index.scss"

const Card = ({ type, tarefaDescricao }) => {

  function alteracao(){
    if(type == "excluir"){
      
    }
  }

  return (
    <div className='container'>
        <div className='container__card'>
            <h1>Deseja {type} esse item?</h1>
            <p>{tarefaDescricao}</p>
            <div>
                <button className='card-btn-azul'><Link to={"/"}>Não</Link></button>
                <button ><Link to={"/"}> Sim </Link></button>
            </div>
        </div>
    </div>
  )
}

export default Card
