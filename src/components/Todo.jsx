import { useDispatch, useSelector } from "react-redux"
import AddForm from './AddForm'; // Ensure AddForm exists in the correct location
import { deleteTodo, markAsDone } from '../features/todo/todoSlice'; // Ensure todoSlice exists

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        dispatch(deleteTodo(id))
    }

    const markAsDoneHandler = (id) => {
        console.log("mark ",id);
        let result = dispatch(markAsDone(id));
        console.log(result);
    }
    
    return(
        <>
        <AddForm/>
        <div>
            <h2>Todo List App</h2>
            <ul>
                {todos.map((todo) => (todo && (
                    <li key={todo.id} style={{textDecoration : todo.isDone? "line-through" : "none"}}>{todo.task}
                    &nbsp; &nbsp;
                    <button onClick={() => deleteHandler(todo.id)}>Delete</button>
                    &nbsp; &nbsp; 
                    <button onClick={() => markAsDoneHandler(todo.id)}>mark as Done</button>
                    </li>
                )))}
                
            </ul>

        </div>
        </>
    )
}