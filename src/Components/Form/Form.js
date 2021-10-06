//formulaire entrer de taches
import { useState, useEffect,useRef  } from "react"
import { useDispatch, useSelector } from "react-redux"
import { v4 as uuidv4 } from "uuid";


import "./Form.css"

const Form = ()=>{
    //verif input value
    const [verif,setVerif] = useState(true)
    //state ajout de tache
    const [log , setLog] = useState({
        title: "",
        subtitle : "",
        body: ""
    })
    //state modification de tache
    const [logModify , setLogModify] = useState({
        title: "",
        subtitle : "",
        body: ""
    })
    //store 2ieme reducer
    const tasks = useSelector(state => state.updateReducer.updateTaches)
    
    //chargement du composant state prend la valeur log
    useEffect(()=>{
        setLogModify(tasks)
    },[tasks])
 
    const allInputRef = useRef([])
    //value input n'est pas present dans ma valeur courante 
    const addInput = el => {
        if(el && !allInputRef.current.includes(el)){
            allInputRef.current.push(el)
        }
    }

    const dispatch = useDispatch()

    //Function ajout reset modify

    const  handlePrevForm = async  (e) => {
        e.preventDefault()
        //validation form value input < 1 modify
        if(tasks.check){
            if(tasks.title.length < 1){
                setVerif(false)
                return 
               }
               setVerif(true)
               //modify
               dispatch({
                   type : "modifyTask", //taskReducer
                   payload : logModify
               })
               //vider l'input et remettre mon state par defaut 
               dispatch({
                   type : "emptyTask",  //updateReducer
               })
               //remettre mon state une fois fini vide
               setLogModify({
                    title: "",
                    subtitle : "",
                    body: ""
               })

        } else if (tasks.check === false){ 
            //validation form value input < 1 ajout 
            if(log.title.length < 1){
                setVerif(false)
                return //return pour que rien de s'execute
            }
                setVerif(true)

                dispatch({
                    type : "addTasks",
                    payload : {
                        ...log,
                        id : uuidv4()
                    }
                })
            //vide mon input
            setLog({
                title : "",
                subtitle : "",
                body : ""
            })
                    }

        
    }
    const majInput = (e)=>{
            const getInputId = e.target.getAttribute("id");

            if(tasks.check){
                //modification 
                const newStateModify = {...logModify,[getInputId]: e.target.value}
                setLogModify(newStateModify)
            } else if (tasks.check === false){
                //ajout 
            //copy state + selection de la clé par id et en valeur la value de mon input
            const newState = {...log,[getInputId]: e.target.value}
            setLog(newState)
        }
    }

    return (
        <div className="container-content">
            <h2>Tâches</h2>
            <form onSubmit={handlePrevForm}>
                <label htmlFor="title">Titre</label>
                <input 
                //value dans mes champs
                value={logModify.check ? logModify.title : log.title}
                onChange={majInput}
                ref={addInput}
                type="text" id="title"/>
                {verif ? "" : <p className="verification">Mentionnez un titre.</p>}

                <label htmlFor="subtitle">Sous-titre</label>
                <input 
                value={logModify.check ? logModify.subtitle : log.subtitle}
                onChange={majInput}
                ref={addInput}

                type="text" id="subtitle"/>

                <label htmlFor="body">Texte</label>               
                <textarea
                value={logModify.check ? logModify.body :log.body}
                onChange={majInput}
                ref={addInput}
                
                type="text" id="body"/>

                <button>Valider</button>
            </form>
        </div>
    )
}
export default Form