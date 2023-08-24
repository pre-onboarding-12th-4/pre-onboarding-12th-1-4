import TodoItem from './TodoItem';
import { TodoContext } from 'context/todo/TodoContext';
import { useContext } from 'react';

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
export default TodoList;
