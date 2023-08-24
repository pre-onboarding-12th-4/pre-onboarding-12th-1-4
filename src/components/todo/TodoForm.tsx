import Button from 'components/common/Button';
import FormStyle from 'components/common/FormStyle';
import Input from 'components/common/Input';
import { TodoContext } from 'context/todo/TodoContext';
import { ChangeEvent, FormEventHandler, useContext, useState } from 'react';

const TodoForm = () => {
  const { createTodo } = useContext(TodoContext);
  const [text, setText] = useState('');

  const handleChange = (text: string) => {
    setText(text);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = e => {
    e.preventDefault();
    createTodo(text);
    setText('');
  };

  const isTodoValid = text.length > 0;

  const input = {
    name: 'todo',
    value: text,
    onChange: (e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value),
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
};

export default TodoForm;
