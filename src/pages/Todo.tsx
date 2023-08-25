import TodoForm from 'components/todo/TodoForm';
import TodoList from 'components/todo/TodoList';
import TodoContextProvider from 'context/todo/TodoContextProvider';
import styled from 'styled-components';
import { ContainerStyle, HeaderStyle } from 'styles/CommonStyle';

const Container = styled(ContainerStyle)`
  position: relative;
  max-width: 600px;
  padding-bottom: 80px;
  min-height: 315px;
`;

const Todo = () => {
  return (
    <TodoContextProvider>
      <Container>
        <HeaderStyle>
          <h1>To Do</h1>
        </HeaderStyle>
        <TodoForm />
        <TodoList />
      </Container>
    </TodoContextProvider>
  );
};

export default Todo;
