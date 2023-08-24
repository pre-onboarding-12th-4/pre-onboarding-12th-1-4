import TodoForm from 'components/todo/TodoForm';
import TodoList from 'components/todo/TodoList';
import TodoContextProvider from 'context/todo/TodoContextProvider';
import { ContainerStyle, HeaderStyle } from 'styles/CommonStyle';

const Todo = () => {
  return (
    <TodoContextProvider>
      <ContainerStyle>
        <HeaderStyle>
          <h1>Todo</h1>
        </HeaderStyle>
        <TodoForm />
        <TodoList />
      </ContainerStyle>
    </TodoContextProvider>
  );
};

export default Todo;
