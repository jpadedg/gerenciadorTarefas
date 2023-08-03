import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "./index.scss"

const Card = ({ type, tarefa  }) => {


  return (
    <div className='container'>
        <div className='container__card'>
            <h1>Deseja {type} esse item?</h1>
            <p>{tarefa}</p>
            <div>
                <button className='card-btn-azul'><Link to={"/"}>Não</Link></button>
                <button><Link to={"/"}> Sim </Link></button>
            </div>
        </div>
    </div>
  )
}

export default Card
