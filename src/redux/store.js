import {createStore, combineReducers} from "redux"
//combineReducers , utilisation plusieurs reducers
import taskReducer from "./reducer/taskReducer"
import updateReducer from "./reducer/updateReducer"


const allReducer = combineReducers({
    taskReducer,
    updateReducer
})

const store = createStore(allReducer)

export default store