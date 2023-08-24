import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  border-radius: 15px;
  background: var(--color-white30);
  &:not(:disabled):hover {
    background: var(--color-white70);
    color: var(--color-blue);
  }
  &:disabled {
    cursor: initial;
  }
`;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  dataTestId?: string;
  btnWidth?: string;
  btnPadding?: string;
}

export default function Button({ text, dataTestId, btnWidth, btnPadding, ...ButtonProps }: Props) {
  const styleChange = {
    width: btnWidth || '100%',
    padding: btnPadding || '13px',
  };

  return (
    <ButtonStyle data-testid={dataTestId} style={styleChange} {...ButtonProps}>
      {text}
    </ButtonStyle>
  );
}
