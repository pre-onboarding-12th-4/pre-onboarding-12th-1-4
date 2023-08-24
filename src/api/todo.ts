import { Todo } from '../types/index';
import instance from './index';

const fetchGetTodo = async (): Promise<Todo[]> => {
  const response = await instance.get('/todos');
  return response.data;
};

const fetchCreateTodo = async (todo: string): Promise<Todo> => {
  const response = await instance.post('/todos', {
    todo: todo,
  });
  return response.data;
};

const fetchUpdateTodo = async (id: number, todo: string, isCompleted: boolean): Promise<Todo> => {
  const response = await instance.put(`/todos/${id}`, {
    todo: todo,
    isCompleted: isCompleted,
  });
  return response.data;
};

const fetchDeleteTodo = async (id: number): Promise<boolean> => {
  const response = await instance.delete(`/todos/${id}`);
  if (response.status === 204) {
    return true;
  } else {
    return false;
  }
};

export { fetchGetTodo, fetchCreateTodo, fetchUpdateTodo, fetchDeleteTodo };
