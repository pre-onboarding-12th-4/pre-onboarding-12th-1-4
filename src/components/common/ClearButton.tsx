import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  padding: 10px 15px;
  border-radius: 15px;
  &:not(:disabled):hover,
  &.on {
    background: var(--color-white20);
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
  disabled: boolean;
  selected: boolean;
};

export default function ClearButton(props: Props) {
  const { type, text, onBtnClick, dataTestId, disabled, selected } = props;
  const className: string = selected ? 'on' : '';

  return (
    <ButtonStyle
      type={type ? type : 'button'}
      onClick={onBtnClick}
      data-testid={dataTestId}
      disabled={disabled}
      className={className}
    >
      {text}
    </ButtonStyle>
  );
}
