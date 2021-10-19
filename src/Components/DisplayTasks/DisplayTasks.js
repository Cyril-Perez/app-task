
import "./DisplayTasks.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const  DisplayTasks = ()=> {
  const  id  = useParams();
  console.log(id);

  const  tasks  = useSelector((state) => state.taskReducer)
  console.log(tasks);
  const index = tasks.taches.filter((item) => {return item.title === id.id});
  console.log(index);

  return (
    <div className="display-content">
      <h2 className="title-taches">
        Votre note : {index[0] ? index[0].title : ""}
      </h2>
      <span className="subtitle-taches">
          {index[0] ? index[0].subtitle : ""}
      </span>
      <p className="txt-taches">
      {index[0] ? index[0].body : ""}
      </p>
    </div>
  );
}
export default DisplayTasks