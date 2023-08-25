import Button from 'components/common/Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ContainerStyle, HeaderStyle } from 'styles/CommonStyle';

const MainStyle = styled.main`
  padding: 30px;
  text-align: center;
  button {
    margin-top: 30px;
  }
  h2 {
    font-size: 40px;
    margin-bottom: 30px;
  }
`;

export default function NotFound() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  return (
    <ContainerStyle>
      <HeaderStyle>
        <h1>Not Found</h1>
      </HeaderStyle>
      <MainStyle>
        <h2>404</h2>
        <p>접근할 수 없는 페이지입니다.</p>
        {!token ? (
          <Button
            type='button'
            dataTestId=''
            text='로그인 페이지로 이동'
            onClick={() => navigate('/signin')}
          />
        ) : (
          <Button
            type='button'
            dataTestId=''
            text='일정 페이지로 이동'
            onClick={() => navigate('/todo')}
          />
        )}
      </MainStyle>
    </ContainerStyle>
  );
}
