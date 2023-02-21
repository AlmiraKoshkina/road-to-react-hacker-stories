import * as React from 'react';

const todoList = [
    {
      id: 1,
      title: 'Watch learning video',  
      },
      {
        id: 2,
      title: 'Complete assignment',  
      },
      {
        id: 3,
      title: 'Submit assignment',  
      },
    ];

function TodoList () {
   return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item)=>(
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
   )
}

export default TodoList;