import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { TodoContext } from 'context/todo/TodoContext';
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

const TodoFormStyle = styled.form`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 30px 30px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    width: 90%;
  }
  button {
    flex-shrink: 0;
  }
`;

export default function TodoForm() {
  const { createTodo } = useContext(TodoContext);

  const [text, setText] = useState('');
  const [warning, setWarning] = useState('');

  const isTodoValid = text.length > 0;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isTodoValid) {
      setWarning('빈 값을 일정으로 추가할 수 없습니다.');
      return;
    }
    createTodo(text);
    setText('');
  };

  useEffect(() => {
    setWarning('');
  }, [text]);

  const input = {
    name: 'todo',
    value: text,
    onChange: handleChange,
    type: 'text',
    inputId: 'todo',
    labelText: 'todo',
    warning: warning,
    placeholder: '할일을 입력해주세요.',
    dataTestId: 'new-todo-input',
  };
  return (
    <TodoFormStyle onSubmit={handleSubmit}>
      <div>
        <Input {...input} />
      </div>
      <Button
        type='submit'
        dataTestId='new-todo-add-button'
        text='생성'
        btnWidth='20%'
        btnPadding='10px'
        className='clear-btn'
      />
    </TodoFormStyle>
  );
}
