import { subtodoApi } from "./axios.api";

const createTAsk = async (todoId, data) => {
    try {
        const response = await subtodoApi.post(`/${todoId}/task`, data);
        return response.data;
    } catch (error) {
        console.log("todo creation failed", error)
        throw error
    }
}

export { createTAsk }