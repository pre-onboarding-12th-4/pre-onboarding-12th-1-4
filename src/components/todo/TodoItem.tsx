import { TodoContext } from 'context/todo/TodoContext';
import { ChangeEventHandler, MouseEventHandler, useContext } from 'react';
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
    <div>
      <input type='checkbox' checked={isCompleted} onChange={handleChanged} />
      <span>예제 텍스트</span>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default TodoItem;
