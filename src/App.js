import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';   //Used second bracket bcz my functions are not default
import {TodoItem} from './MyComponents/TodoItem';    
import {Footer} from './MyComponents/Footer';

function App() {
  return (
    <>
      <Header title = "My Todo List" searchBar = {false}/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
