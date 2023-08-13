import React, { useState } from 'react'
import "./index.scss" 
import iconEdit from '../../assets/iconEdit.png'
import iconDelete from '../../assets/iconDelete.png'
import iconNoChecked from '../../assets/checkUnlock.png'
import iconChecked from '../../assets/checkLock.png'
import { Link } from 'react-router-dom'

const Row = ({ tarefa , props }) => {

  const [imagem , setImagem] = useState(iconNoChecked)

  function change(){
    setImagem(state => state === iconNoChecked ? iconChecked : iconNoChecked);
  }

  return (
    <tr className='row'>
      <td><p>{tarefa}</p></td>
      <td>
          <img onClick={change} src={imagem} />
      </td>
      <td className='right'>
        <Link to={`/Edit/${tarefa}`}>
          <img src={iconEdit}/>
        </Link>
      
        <Link to={`/Excluir/${tarefa}`}>
          <img src={iconDelete}/>
        </Link>
      </td>
    </tr>  
  )
}

export default Row
