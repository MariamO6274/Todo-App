import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([])

    const addTodo = (text) => {
      let id = 1;
      if (todos.length > 0) {
        id = todos[0].id + 1;
      }
      let todo = { id: id, text: text, completed: false, important: false };
      let newTodos = [todo, ...todos];
      //console.log(newTodos)
      setTodos(newTodos);
    };

    const removeTodo = (id) => {
      let updateTodos = [...todos].filter((todo)=> todo.id !== id)
      setTodos(updateTodos)

    }

    const completeTodo = (id) => {
      //console.log(id)
      let updateTodos = todos.map((todo) => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo
      })
      setTodos(updateTodos);

    }

  return (
    <div className="todo-app">
      <h1 style={{ color: "rgba(17, 122, 255, 1)" }}>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <hr className="seperator" />
      {todos.map((todo) => {
        return (
          <TodoItem
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            todo={todo}
            key={todo.id}
          />
        );
      })}
    </div>
  );
}

export default App;
