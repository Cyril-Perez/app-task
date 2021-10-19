//AlllTask parent de Tasks 
//composant affichage de mes notes acces rapide

import "./AllTasks.css"
import { useState, useEffect } from "react"
import {useSelector } from "react-redux"
import left from "./Tasks/left-arrow.svg"
import right from "./Tasks/right-arrow.svg"
import { Link } from "react-router-dom"

import Tasks from "./Tasks/Tasks"
  
//affichage de mes notes 
//useSelector pour la manipulation des données de mon store
const AllTasks = ()=>{

    const {taches} = useSelector(state => state.taskReducer)
    
    const [toggleTask, setToggleTask] = useState(false)
    //passage state local pour filter
    const [tasksList, setTasksList] = useState(taches)

    //on relance la func a chaque changement de mon state
    useEffect(()=>{
        setTasksList(taches)
    },[taches])

    const funcDirection = ()=>{
        setToggleTask(!toggleTask)
    }

    const handleSearchTask = (e)=>{
        let copyState = [...taches]
        //return chaque element qui possede la value de ma recherche par son title
        let arrayFiltrer = copyState.filter((element)=>element.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setTasksList(arrayFiltrer)
    }

    return (
        <div className={toggleTask ? "tasks-display active" : "tasks-display"}>
            <img className="direction" onClick={funcDirection} src={toggleTask ? left : right} alt="chevron"/>
            <h2>Mes Tâches</h2>
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input
                onChange={handleSearchTask}
                type="text"
                id="tasks-search"
                placeholder="search"
                />
            </form>
            <ul className="tasks-list">
                {tasksList.map((item)=>{
                  return  <Link to={{pathname : `/displayTasks/${item.title}`}} style={{textDecoration: "none" , color : "#333"}}><Tasks 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    body={item.body}
                    />
                    </Link>
                    
                })}
            </ul>
        </div>
    )
}
export default AllTasks