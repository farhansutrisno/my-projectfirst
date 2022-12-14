import { useState } from "react";

const Header = ({setRefresh}) => {
  const [title, setTitle] = useState("");

  const addTodo = () => {
    const newTodo = {title, done: false}
    
    if (title == '') {
      alert('tidak boleh kosong')
      return false
    }

    fetch('http://localhost:3000/todos',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTodo)
    }).then(() => {
      setTitle("")
      setRefresh(true)

    });

  }

    return ( 
        <div id="todo-header" className="header">
		
          <h2>Simple Todo App</h2>
        		
          <input type="text"  value={title} onChange={(e) => setTitle(e.target.value)} />
        		
          <span className="add-button" onClick={addTodo}>Add</span>
        		
        </div>
    );
}
 
export default Header;
