import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';   //Used second bracket bcz my functions are not default
import { AddTodo } from "./MyComponents/AddTodo";
import { Footer } from './MyComponents/Footer';
import React, { useState } from 'react';  
 

function App() {
const onDelete= (todo) => {
  console.log("I am ondelte of todo", todo)
  // Deleting this way in react doesn't work
  // let index = todos.indexOf(todo);
  // todos.splice(index, 1);

  setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
  localStorage.setItem("todos",JSON.stringify(todos));
}

  const addTodo = (title, desc)=>{
    console.log("I'm adding this todo", title, desc)
    let sno;
    if(todos.length==0){
     sno = 0;
    }
    else{
      sno= todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  
  const [todos, setTodos] = useState([])
  
  
  
  
  
  return (
    <>
      <Header title="My Todo List" searchBar={false} />
      <AddTodo addTodo={addTodo}/>
      <Todos todos = {todos} onDelete = {onDelete}/>
      <Footer />
    </>
  );
}

export default App;
