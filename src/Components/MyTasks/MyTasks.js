//Composant affichage tache lors de mon click
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "./MyTasks.css"

const MyTasks = ()=>{

    const tasks = useSelector(state => state.taskReducer.taches)
    

    return(
        <div className="container-content">
                <h2>Mes tâches</h2>
                <ul className="tasks-one-card">
                {tasks.map((item) => {
                  return  <Link
                    key={item.id}
                    to={{
                        pathname: `/displayTasks/${item.title}`
                    }}
                    >
                        <li>
                            <h2>{item.title}</h2>
                            <p>{item.subtitle}</p>
                        </li>
                    </Link>
                })}

                </ul>
        </div>
    )
}
export default MyTasks