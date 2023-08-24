import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { TodoContext } from 'context/todo/TodoContext';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { FormStyle } from 'styles/CommonStyle';

export default function TodoForm() {
  const { createTodo } = useContext(TodoContext);

  const [text, setText] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(text);
    setText('');
  };

  const isTodoValid = text.length > 0;

  const input = {
    name: 'todo',
    value: text,
    onChange: handleChange,
    type: 'text',
    inputId: 'todo',
    labelText: 'todo',
    warning: '',
    placeholder: '할일을 입력해주세요.',
    dataTestId: 'new-todo-input',
  };
  return (
    <FormStyle onSubmit={handleSubmit}>
      <Input {...input} />
      <Button
        type='submit'
        dataTestId='new-todo-add-button'
        disabled={!isTodoValid}
        text='생성'
        btnWidth=''
        btnPadding=''
      />
    </FormStyle>
  );
}
