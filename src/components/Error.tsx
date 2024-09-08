import styled from "styled-components"
import { Container } from "./Loading"
import ErrorIcon from '@mui/icons-material/Error';

export interface IError {
  isError: boolean;
  message: string;
}

const ErrorTitle = styled.h1({
  fontSize: 32,
  color: '#A94820'
});

const ErrorMessage = styled.p({
  fontSize: 20,
  fontWeight: 500,
  color: '#DC6820'
})

const Error = ({ message }: IError) => {
  return (
    <Container>
      <ErrorTitle>An Error Occured</ErrorTitle>
      <ErrorIcon style={{ color: '#A94820', fontSize: 32 }} />
      <ErrorMessage>{message}</ErrorMessage>
    </Container>
  )
}

export default Error