import TodoForm from 'components/todo/TodoForm';
import TodoList from 'components/todo/TodoList';
import { TodoContext } from 'context/todo/TodoContext';
import { useContext } from 'react';
import styled from 'styled-components';
import { ContainerStyle, HeaderStyle } from 'styles/CommonStyle';

const Container = styled(ContainerStyle)`
  position: relative;
  max-width: 600px;
  padding-bottom: 80px;
  min-height: 315px;
`;

const Todo = () => {
  const { isLoaded } = useContext(TodoContext);
  if (!isLoaded) return null;
  return (
    <Container>
      <HeaderStyle>
        <h1>Todo</h1>
      </HeaderStyle>
      <TodoForm />
      <TodoList />
    </Container>
  );
};

export default Todo;
