import TodoItem from './TodoItem';
import { TodoContext } from 'context/todo/TodoContext';
import { useContext } from 'react';
import { styled } from 'styled-components';

const TodoList = () => {
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
};
export default TodoList;

const TodoListStyle = styled.ul`
  max-height: 480px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px 30px;
  clear: both;
  p {
    width: 100%;
    text-align: center;
    padding: 30px;
  }
`;
