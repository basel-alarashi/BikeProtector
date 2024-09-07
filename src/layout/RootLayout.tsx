import { PropsWithChildren } from "react"
import Footer from "./Footer"
import Header from "./Header"
import styled from "styled-components"

const Wrapper = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between'
});

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default RootLayout