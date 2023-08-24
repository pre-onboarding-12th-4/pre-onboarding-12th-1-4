import React from 'react';
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

type Props = {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  text: string;
  onBtnClick: React.MouseEventHandler<HTMLButtonElement>;
  dataTestId: string;
  btnWidth: string;
  btnPadding: string;
  disabled: boolean;
};

export default function Button(props: Props) {
  const { type, text, onBtnClick, dataTestId, btnWidth, btnPadding, disabled } = props;

  const styleChange = {
    width: btnWidth || '100%',
    padding: btnPadding || '13px',
  };

  return (
    <ButtonStyle
      type={type ? type : 'button'}
      onClick={onBtnClick}
      data-testid={dataTestId}
      style={styleChange}
      disabled={disabled}
    >
      {text}
    </ButtonStyle>
  );
}
