import Button from 'components/common/Button';
import { TodoContext } from 'context/todo/TodoContext';
import { ChangeEvent, useContext } from 'react';
import { CheckBoxStyle, TodoItemStyle } from 'styles/CommonStyle';
import { Todo } from 'types';

interface Props {
  todo: Todo;
}
export default function TodoItem({ todo: { id, todo, isCompleted } }: Props) {
  const { updateTodo, deleteTodo } = useContext(TodoContext);

  const handleChanged = (e: ChangeEvent<HTMLInputElement>) =>
    updateTodo(id, todo, e.target.checked);

  const handleDelete = () => deleteTodo(id);

  return (
    <TodoItemStyle>
      <label>
        <CheckBoxStyle checked={isCompleted}>
          <input type='checkbox' checked={isCompleted} onChange={handleChanged} />
          <span>{todo}</span>
        </CheckBoxStyle>
      </label>
      <span className='btn-wrapper'>
        <Button
          text='수정'
          btnWidth='60px'
          btnPadding='5px'
          dataTestId='modify-button'
          onClick={() => {
            throw new Error('구현 필요');
          }}
        />
        <Button
          text='삭제'
          btnWidth='60px'
          btnPadding='5px'
          dataTestId='delete-button'
          onClick={handleDelete}
        />
      </span>
    </TodoItemStyle>
  );
}
