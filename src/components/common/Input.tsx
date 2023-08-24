import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
  background: none;
  border-bottom: 1px solid var(--color-white70);
  width: 95%;
  padding: 15px 10px;
  &::placeholder {
    color: var(--color-white70);
  }
  &:hover {
    border-bottom: 1px solid white;
  }
`;

const WarningText = styled.p`
  font-size: 0.7em;
  text-align: start;
  padding: 7px 15px;
  height: 28px;
`;

type Props = {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  inputId: string;
  labelText: string;
  warning: string;
  placeholder: string;
  dataTestId: string;
};

export default function Input(props: Props) {
  const { name, value, onChange, type, inputId, labelText, warning, placeholder, dataTestId } =
    props;

  return (
    <>
      <label className='a11y-hidden' htmlFor={inputId}>
        {labelText}
      </label>
      <InputStyle
        name={name}
        value={value}
        onChange={onChange}
        type={type ? type : 'text'}
        id={inputId}
        placeholder={placeholder}
        data-testid={dataTestId}
        autoComplete={type === 'password' ? 'off' : 'on'}
      />
      <WarningText>{warning}</WarningText>
    </>
  );
}
