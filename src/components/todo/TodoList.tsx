import TodoItem from './TodoItem';
import { TodoContext } from 'context/todo/TodoContext';
import { useContext } from 'react';
import { TodoListStyle } from 'styles/CommonStyle';

export default function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <TodoListStyle>
      {todos.length === 0 ? (
        <p>일정이 없습니다.</p>
      ) : (
        todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
      )}
    </TodoListStyle>
  );
}
