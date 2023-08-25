import Button from 'components/common/Button';
import TodoForm from 'components/todo/TodoForm';
import TodoList from 'components/todo/TodoList';
import { AuthContext } from 'context/auth/AuthContext';
import { TodoContext } from 'context/todo/TodoContext';
import { useContext } from 'react';
import styled from 'styled-components';
import { ContainerStyle, HeaderStyle } from 'styles/CommonStyle';

const Container = styled(ContainerStyle)`
  position: relative;
  max-width: 600px;
  padding-bottom: 100px;
  min-height: 315px;
  & > div {
    padding: 10px;
    text-align: end;
  }
`;

const Todo = () => {
  const { isLoaded } = useContext(TodoContext);
  const { logout } = useContext(AuthContext);
  if (!isLoaded) return null;
  return (
    <Container>
      <HeaderStyle>
        <h1>Todo</h1>
      </HeaderStyle>
      <div>
        <Button
          type='submit'
          dataTestId=''
          text='로그아웃'
          btnWidth='20%'
          btnPadding='10px'
          className='clear-btn'
          onClick={logout}
        />
      </div>
      <TodoList />
      <TodoForm />
    </Container>
  );
};

export default Todo;
