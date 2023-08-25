// eslint-disable-next-line no-unused-vars
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { TodoContext } from 'context/todo/TodoContext';
import { useCallback, useContext, useState } from 'react';
import { Todo } from 'types';

interface Props {
  cancelEdit: () => void;
  todo: Todo;
}
export default function TodoItemEdit({ todo, cancelEdit }: Props) {
  const { updateTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState(todo.todo);
  const [warningText, setWarningText] = useState('');

  const onSubmitTodo = useCallback(() => {
    if (!newTodo.replace(' ', '')) {
      setWarningText('내용을 입력해주세요~');
      return;
    }
    updateTodo(todo.id, newTodo, todo.isCompleted);
    cancelEdit();
  }, [cancelEdit, newTodo, todo.id, todo.isCompleted, updateTodo]);

  return (
    <>
      <div>
        <Input
          dataTestId={'modify-input'}
          warning={warningText}
          labelText={'todoEdit'}
          inputId={'edit-todo'}
          value={newTodo}
          onChange={e => {
            setNewTodo(e.target.value);
          }}
        />
      </div>
      <span className='btn-wrapper'>
        <Button
          text='제출'
          btnWidth='60px'
          btnPadding='5px'
          dataTestId='submit-button'
          onClick={onSubmitTodo}
        />
        <Button
          text='취소'
          btnWidth='60px'
          btnPadding='5px'
          dataTestId='cancel-button'
          onClick={cancelEdit}
        />
      </span>
    </>
  );
}
