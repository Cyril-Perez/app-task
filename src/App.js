import Navbar from "./Components/Navbar/Navbar";
import Form from "./Components/Form/Form";
import MyTasks from "./Components/MyTasks/MyTasks";
import AllTasks from "./Components/AllTasks/AllTasks";
import DisplayTasks from "./Components/DisplayTasks/DisplayTasks";
import {BrowserRouter as Router , Switch , Route } from "react-router-dom"

function App() {
  return (
    <Router>
        <Navbar/>
        <AllTasks/>
        <Switch>
          <Route path="/" exact component={MyTasks}/>
          <Route path="/edit" exact component={Form}/>
          <Route path="/displayTasks/:id" exact component={DisplayTasks}/>
        </Switch>
    </Router>
  );
}

export default App;
