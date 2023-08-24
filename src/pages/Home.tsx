import Button from '../components/common/Button';
import { ContainerStyle } from '../styles/CommonStyle';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled(ContainerStyle)`
  padding: 30px;
  h1 {
    font-weight: bold;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 12px;
    transform: translateX(-15px);
    span {
      display: inline-block;
      width: 25px;
      height: 25px;
      background: white;
      border-radius: 50%;
      margin-bottom: 1px;
      opacity: 0.8;
    }
    span:nth-of-type(1) {
      background: rgb(106, 221, 190);
      transform: translateX(8px);
    }
    span:nth-of-type(2) {
      background: rgb(83, 140, 247);
    }
    span:nth-of-type(3) {
      background: rgb(52, 95, 233);
      transform: translateX(-8px);
    }
  }
  p {
    margin-bottom: 23px;
    text-align: center;
  }
  button:nth-of-type(1) {
    margin-bottom: 12px;
  }
`;

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>
        <span />
        <span />
        <span />
        wanted
      </h1>
      <p>원티드 todo를 더 즐겁고 편하게 이용하세요.</p>
      <Button text='로그인' onClick={() => navigate('/signin')} />
      <Button text='회원가입' onClick={() => navigate('/signup')} />
    </Container>
  );
}
