import React from 'react';
import { styled } from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <Styles>{children}</Styles>;
}

// 다른 방식으로 스타일링 해도 좋을 것 같습니다. styles/styles.ts ?
const Styles = styled.div`
  background-color: #cff8ff;
  height: 100%;
`;
