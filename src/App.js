import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';   //Used second bracket bcz my functions are not default
import { Footer } from './MyComponents/Footer';


function App() {
const onDelete= (todo) => {
  console.log("I am ondelte of todo", todo)
  let index = todos.indexOf(todo);
  todos.splice(index, 1);
}


  let todos = [
    {
        sno: 1,
        title: "Go to market",
        desc: "You need to go to the market to get this job done"
    },
    {
        sno: 2,
        title: "Go to mall",
        desc: "You need to go to the market to get this job done"
    },
    {
        sno: 3,
        title: "Go to ghat",
        desc: "You need to go to the market to get this job done"
    },
]
  return (
    <>
      <Header title="My Todo List" searchBar={false} />
      <Todos todos = {todos} onDelete = {onDelete}/>
      <Footer />
    </>
  );
}

export default App;
