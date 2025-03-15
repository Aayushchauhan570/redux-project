// import { nanoid } from "@reduxjs/toolkit"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";


export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(addTodo(task));
        setTask("")
    }
    return (
        <>
        <form onSubmit={submitHandler}>
            <input type="text" onChange={(e) => setTask(e.target.value)} name="" id="" placeholder="Your task" />
            <button>Add Task</button>
        </form>
        </>
    )
}