import { TodoContext } from './TodoContext';
import { fetchCreateTodo, fetchDeleteTodo, fetchGetTodo, fetchUpdateTodo } from 'api/todo';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Todo } from 'types';

export default function TodoContextProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = useCallback(async () => {
    const res = await fetchGetTodo();
    setTodos(res);
  }, []);

  const createTodo = useCallback(async (todo: string) => {
    const res = await fetchCreateTodo(todo);
    setTodos(prev => [...prev, res]);
    return res;
  }, []);

  const updateTodo = useCallback(async (id: number, todo: string, isCompleted: boolean) => {
    const res = await fetchUpdateTodo(id, todo, isCompleted);
    setTodos(prev => {
      const arr = [...prev];
      arr[arr.findIndex(item => item.id === id)] = res;
      return arr;
    });
  }, []);

  const deleteTodo = useCallback(async (id: number) => {
    const res = await fetchDeleteTodo(id);
    if (res) {
      setTodos(prev => prev.filter(item => item.id !== id));
    }
  }, []);

  return (
    <TodoContext.Provider value={{ todos, createTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
