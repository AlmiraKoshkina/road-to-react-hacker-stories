import * as React from 'react';


function AddTodoForm () {
    return (
    <form>
        <label for ='todoTitle'> Title </label>
    
        <input id = "todoTitle"></input>
        
        <button>Add </button>
    </form>
    )
    
     
  }

  export default AddTodoForm;