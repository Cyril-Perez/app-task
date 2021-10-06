
import "./DisplayTasks.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const  DisplayTasks = ()=> {
  const  id  = useParams();
  console.log(id);

  const { tasks } = useSelector((state) => state.taskReducer);

  const index = tasks.findIndex((item) => item.title === id);

  return (
    <div className="display-content">
      <h2 className="title-taches">
        Votre note : {tasks[index] ? `${tasks[index].title}` : ""}
      </h2>
      <span className="subtitle-taches">
        {tasks[index] ? `${tasks[index].subtitle}` : ""}
      </span>
      <p className="txt-taches">
        {tasks[index] ? `${tasks[index].body}` : ""}
      </p>
    </div>
  );
}
export default DisplayTasks