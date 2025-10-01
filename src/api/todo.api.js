import { todoApi } from "./axios.api";


const createTodo = async () => {
    try {
        const response = await todoApi.post("/todo");
        return response.data;
    } catch (error) {
        console.log("todo creation failed", error)
        throw error
    }
}

const getAllTodos = async () => {
    try {
        const response = await todoApi.get("/todo")
        return response.data
    } catch (error) {
        console.log("cannot get all todos", error)
        throw error
    }
}

const getAllTasks = async (todoId) => {
    try {
        const response = await todoApi.get(`/todo/${todoId}`)
        return response.data
    } catch (error) {
        console.log("cannot get tasks", error)
        throw error
    }
}


export { createTodo, getAllTodos, getAllTasks }
