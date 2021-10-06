import { v4 as uuidv4 } from "uuid";
//state
const initialState = {
  taches: [
    {
      title: "footing",
      subtitle: "trainning 5 minutes",
      body: "Renforcement musculaire ,15 km de marche rapide. ",
      id: uuidv4(),
    },
    {
      title: "Tennis",
      subtitle: "match officiel",
      body: "tournois de tennis a Monaco pour le titre national. ",
      id: uuidv4(),
    },
    {
      title: "Piano",
      subtitle: "jour une symphonie",
      body: "20 minutes de piano pour s'entrainer a jouer une symphonie. ",
      id: uuidv4(),
    },
  ],
};

//reducer
export default function taskReducer(state = initialState,action){
        switch (action.type) {
            case  "deleteTasks": 
              //on va filter suivant si les id ne sont pas les mêmes 
              const newTasksArray = [...state.taches].filter(task => task.id !== action.payload)
              return {
                taches : newTasksArray
              }     
             
            case "addTasks":
              //copy mes objets deja présents
              const newTasksArrayAdd = [...state.taches]
              //push l'objet envoyer de mon form et return state
              // newTasksArrayAdd.push(action.payload)
              // // return {
              // //   taches : newTasksArrayAdd 
              // // }
              return {
                taches : [...state.taches,action.payload]
              }
              case  "modifyTask":
                console.log(action.payload);
                const newTasksArrayModify = [...state.taches];
                const newObject = action.payload;
              
                const index = newTasksArrayModify.filter(item => item.id === newObject.id)
                console.log(index);
                newTasksArrayModify.splice(index, 1, newObject)
                return{
                  taches : newTasksArrayModify
                }
            default : return state
        }
        
}