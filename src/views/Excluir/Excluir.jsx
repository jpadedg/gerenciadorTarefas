import Bigtitle from "../../components/BigTitle/Bigtitle"
import Navbar from "../../components/Navbar/Navbar"
import Card from "../../components/Card/Card"
import { useParams } from "react-router-dom"

const Excluir = () => {
    const { tarefa } = useParams();

    return (
        <div className='excluir'>
            <Navbar/>
            <Bigtitle/>
            <Card type={"excluir"} tarefa={tarefa}/>
        </div>
    )

}

export default Excluir