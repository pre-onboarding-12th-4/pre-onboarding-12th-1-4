import TodoForm from 'components/todo/TodoForm';
import TodoList from 'components/todo/TodoList';
import { TodoContext } from 'context/todo/TodoContext';
import { useContext } from 'react';
import { ContainerStyle, HeaderStyle } from 'styles/CommonStyle';

const Todo = () => {
  const { isLoaded } = useContext(TodoContext);
  if (!isLoaded) return null;
  return (
    <ContainerStyle>
      <HeaderStyle>
        <h1>Todo</h1>
      </HeaderStyle>
      <TodoForm />
      <TodoList />
    </ContainerStyle>
  );
};

export default Todo;
