import Bigtitle from "../../components/BigTitle/Bigtitle"
import Navbar from "../../components/Navbar/Navbar"
import Card from "../../components/Card/Card"
import { useParams } from "react-router-dom"

const Editar = () => {

    const { tarefa } = useParams();
    
    return (
        <div className='editar'>
            <Navbar/>
            <Bigtitle/>
            <Card type={"editar"} tarefaDescricao={tarefa}/>
        </div>
    )

}

export default Editar