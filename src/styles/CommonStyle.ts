import styled from 'styled-components';

const ContainerStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 450px;
  border-radius: 15px;
  border: 1px solid var(--color-white70);
  background: var(--color-white20);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

const HeaderStyle = styled.header`
  width: 100%;
  h1 {
    font-weight: 400;
    text-align: center;
    width: 100%;
    padding: 15px 15px 13px;
    font-size: 1.5rem;
    background: var(--color-white20);
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

const FormStyle = styled.form`
  padding: 30px;
  text-align: center;
  button {
    margin-top: 15px;
  }
`;

const TodoListStyle = styled.ul`
  max-height: 480px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px 30px;
  clear: both;
  /* p {
    width: 100%;
    text-align: center;
    padding: 30px;
  } */
`;

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

export { ContainerStyle, HeaderStyle, CheckBoxStyle, FormStyle, TodoListStyle, TodoItemStyle };
