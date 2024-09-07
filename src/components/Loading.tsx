import styled, { keyframes } from "styled-components"

export const Container = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8
});

const rotate = keyframes`
  from { transform: rotate(0) }
  to { transform: rotate(360deg) }
`;

const Spinner = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(to top right, #0F466B, #FFF);
  border-left: 5px solid #3498DB;
  border-radius: 50%;
  animation-duration: 1s;
  animation-name: ${rotate};
  animation-iteration-count: infinite;
`;

export const Text = styled.p({
  fontSize: 18,
  fontWeight: 500,
  color: '#3498DB'
});

const Loading = () => {
  return (
    <Container>
      <Spinner />
      <Text>Loading...</Text>
    </Container>
  )
}

export default Loading