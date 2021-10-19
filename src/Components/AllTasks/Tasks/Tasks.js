//composant d'une tache accés rapide enfant allTask
import "./Tasks.css";
import  delet  from "./remove.svg"
import  editer  from "./edit.svg"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Tasks = (props)=>{
    console.log(props);
    const dispatch =  useDispatch()

    const deleteTask = ()=>{
        dispatch({
            type: "deleteTasks", 
            payload : props.id
        })
    }
    //update reducer passage a true
    const modifyTask = ()=>{
        
        dispatch({
            type: "displayTaskWithModify", 
            payload : props
        })
    }
    //second reducer pour modifiy
    return (
        
        <li className="tasks-prev">
                <div className="content-tasks-left">
                    <p>{props.title}</p>
                    <p>{props.subtitle}</p>
                </div>
                <div className="content-tasks-right">
                    <button onClick={deleteTask}>
                        <img src={delet} alt="delete"/>
                    </button>
                    <Link to="/edit">
                    <button onClick={modifyTask}>
                        <img src={editer} alt="editer"/>
                    </button>
                    </Link>
                </div>
        </li>
       
    )
}
export default Tasks