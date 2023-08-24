import ClearButton from 'components/common/ClearButton';
import { TodoContext } from 'context/todo/TodoContext';
import { ChangeEventHandler, MouseEventHandler, useContext } from 'react';
import { styled } from 'styled-components';
import { Todo } from 'types';

type TodoItemProps = {
  todo: Todo;
};
const TodoItem = ({ todo: { id, todo, isCompleted } }: TodoItemProps) => {
  const { updateTodo, deleteTodo } = useContext(TodoContext);

  const handleChanged: ChangeEventHandler<HTMLInputElement> = e => {
    updateTodo(id, todo, e.target.checked);
  };

  const handleDelete: MouseEventHandler<HTMLButtonElement> = () => {
    deleteTodo(id);
  };

  return (
    <TodoItemStyle>
      <label>
        <CheckBoxStyle checked={isCompleted}>
          <input type='checkbox' checked={isCompleted} onChange={handleChanged} />
          <span>{todo}</span>
        </CheckBoxStyle>
      </label>
      <ClearButton
        type='button'
        dataTestId='delete-button'
        text='삭제'
        onBtnClick={handleDelete}
        disabled={false}
        selected={false}
      />
    </TodoItemStyle>
  );
};

export default TodoItem;

const TodoItemStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  word-break: break-all;
  input {
    margin-right: 10px;
  }
  .btn-wrapper {
    flex-shrink: 0;
    margin-left: 10px;
  }
  .btn-wrapper button {
    margin-left: 5px;
  }
`;

const CheckBoxStyle = styled.label<{ checked: boolean }>`
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.75em;
  input[type='checkbox'] {
    appearance: none;
    background: var(--color-white70);
    margin: 0;
    font: inherit;
    width: 1.15em;
    height: 1.15em;
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }
  input[type='checkbox']::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    background: var(--color-blue);
    transform: scale(0);
    transition: 120ms transform ease-in-out;
  }
  input[type='checkbox']:checked::before {
    transform: scale(1);
  }

  span {
    text-decoration: ${props => (props.checked ? 'line-through' : 'initial')};
  }
`;
