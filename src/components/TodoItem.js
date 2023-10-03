
import React from 'react'

function TodoItem(props) {
  return (
    <div className='todo-row'>{props.todo.text}</div>
  )
}

export default TodoItem