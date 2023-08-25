import TodoItem from './TodoItem';
import { TodoContext } from 'context/todo/TodoContext';
import { useContext } from 'react';
import { styled } from 'styled-components';
import { TodoListStyle } from 'styles/CommonStyle';

export default function TodoList() {
  const { todos, loading } = useContext(TodoContext);

  return (
    <TodoListStyle>
      {todos.length === 0 ? (
        <p>일정이 없습니다.</p>
      ) : (
        todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
      )}
      <Loading loading={loading} />
    </TodoListStyle>
  );
}

const Loading = ({ loading }: { loading: boolean }) => {
  return (
    <LoadingStyle loading={`${loading}`}>
      <div className='loading__bar'></div>
    </LoadingStyle>
  );
};

const LoadingStyle = styled.div<{ loading: string }>`
  opacity: ${({ loading }) => (loading === 'true' ? 1 : 0)};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #e9ecef;
  .loading__bar {
    width: 0%;
    height: 100%;
    background-color: #212529;
    animation: loading 1s infinite;
  }
  @keyframes loading {
    0% {
      width: 0%;
    }
    50% {
      width: 50%;
    }
    100% {
      width: 100%;
    }
  }
`;
