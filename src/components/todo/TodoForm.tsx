import { TodoContext } from 'context/todo/TodoContext';
import { ChangeEventHandler, FormEventHandler, useContext, useState } from 'react';

const TodoForm = () => {
  const { createTodo } = useContext(TodoContext);
  const [text, setText] = useState('');
  const handleChange: ChangeEventHandler<HTMLInputElement> | undefined = e => {
    setText(e.target.value);
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = e => {
    e.preventDefault();
    createTodo(text);
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={text} onChange={handleChange} />
      <button>만들기</button>
    </form>
  );
};

export default TodoForm;
