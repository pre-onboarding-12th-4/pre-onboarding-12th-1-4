import { InputHTMLAttributes } from 'react';
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

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  dataTestId: string;
  warning: string;
  labelText: string;
  inputId: string;
  // ref: HTMLInputElement;
}

export default function Input({
  dataTestId,
  warning,
  labelText,
  inputId,
  // ref,
  ...InputProps
}: Props) {
  return (
    <>
      <label className='a11y-hidden' htmlFor={inputId}>
        {labelText}
      </label>
      <InputStyle
        id={inputId}
        data-testid={dataTestId}
        {...InputProps}
        // ref={ref}
      />
      <WarningText>{warning}</WarningText>
    </>
  );
}
