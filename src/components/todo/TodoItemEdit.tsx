// eslint-disable-next-line no-unused-vars
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { TodoContext } from 'context/todo/TodoContext';
import { FormEvent, useCallback, useContext, useState } from 'react';
import styled from 'styled-components';
import { Todo } from 'types';

const EditFormStyle = styled.form`
  width: 100%;
  & > div {
    width: 100%;
    padding: 0;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface Props {
  cancelEdit: () => void;
  todo: Todo;
}
export default function TodoItemEdit({ todo, cancelEdit }: Props) {
  const { updateTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState(todo.todo);
  const [warningText, setWarningText] = useState('');

  const onSubmitTodo = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!newTodo.replace(' ', '')) {
        setWarningText('내용을 입력해주세요.');
        return;
      }
      if (newTodo === todo.todo) {
        alert('수정된 내용이 없습니다.');
        return;
      }
      if (confirm('수정된 내용을 저장하시겠습니까?')) {
        updateTodo(todo.id, newTodo, todo.isCompleted);
        cancelEdit();
      }
    },
    [cancelEdit, newTodo, todo.id, todo.isCompleted, updateTodo],
  );

  return (
    <EditFormStyle>
      <div>
        <Input
          dataTestId={'modify-input'}
          warning={warningText}
          labelText={'todoEdit'}
          inputId={'edit-todo'}
          focus
          value={newTodo}
          onChange={e => {
            setNewTodo(e.target.value);
          }}
        />
      </div>
      <span className='btn-wrapper'>
        <Button
          type='submit'
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
    </EditFormStyle>
  );
}
