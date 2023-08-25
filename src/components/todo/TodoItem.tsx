import TodoItemEdit from './TodoItemEdit';
import Button from 'components/common/Button';
import { TodoContext } from 'context/todo/TodoContext';
import { ChangeEvent, useContext, useState } from 'react';
import { CheckBoxStyle, TodoItemStyle } from 'styles/CommonStyle';
import { Todo } from 'types';

interface Props {
  todo: Todo;
}
export default function TodoItem({ todo }: Props) {
  const { updateTodo, deleteTodo } = useContext(TodoContext);
  const [editOn, setEditOn] = useState(false);

  const handleChanged = (e: ChangeEvent<HTMLInputElement>) =>
    updateTodo(todo.id, todo.todo, e.target.checked);

  const handleDelete = () => deleteTodo(todo.id);

  return (
    <TodoItemStyle>
      {editOn ? (
        <TodoItemEdit todo={todo} cancelEdit={() => setEditOn(false)} />
      ) : (
        <>
          <CheckBoxStyle checked={todo.isCompleted}>
            <input type='checkbox' checked={todo.isCompleted} onChange={handleChanged} />
            <span>{todo.todo}</span>
          </CheckBoxStyle>
          <span className='btn-wrapper'>
            <Button
              text='수정'
              btnWidth='60px'
              btnPadding='5px'
              dataTestId='modify-button'
              onClick={() => setEditOn(true)}
            />
            <Button
              text='삭제'
              btnWidth='60px'
              btnPadding='5px'
              dataTestId='delete-button'
              onClick={handleDelete}
            />
          </span>
        </>
      )}
    </TodoItemStyle>
  );
}
