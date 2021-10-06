

const initState = {
    updateTaches : {
        title : "",
        subtitle : "",
        body : "",
        id : "",
        check : false
    }
}

export default function updateReducer(state = initState,action){
    switch (action.type) {
        //permet de passer mon check a true et ensuite dans mon form
        //on va pouvoir editer en dispatchant vers mon 2nd reducer (modifyTask)
    
        case "displayTaskWithModify":
            return {
                updateTaches : {
                    ...action.payload,
                    check : true
                }
            }
        case "emptyTask" :
            return {
            updateTaches : {
                title : "",
                subtitle : "",
                body : "",
                id : "",
                check : false
            }
        }
        default : return state   
    }
}