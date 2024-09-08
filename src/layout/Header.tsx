import styled from "styled-components"

const HeaderContainer = styled.div({
  width: '100%',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: '#161616'
});

const LogoSection = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
});

const Logo = styled.img({
  width: '90px',
  height: '90px',
  objectFit: 'contain'
});

const LogoText = styled.span({
  position: 'absolute',
  color: 'white',
  textTransform: 'uppercase',
  fontSize: 20,
  fontWeight: 900
});

const LinksSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  
  a {
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const Link = styled.a`
  color: gray;

  &:hover { color: white }
`;

const SignUpButton = styled.a`
  background-color: transparent;
  color: white;
  outline: none;
  padding: 12px;
  border: 1px solid #3498DB;
  border-radius: 4px;
  cursor: pointer;

  &:hover { background-color: #525252 }
`;

const links = ['search bikes', 'blog', 'donate', 'stolen bike', 'help', 'log in'];

const Header = () => {
  return (
    <HeaderContainer>
      <LogoSection>
        <Logo src="/logo.svg" />
        <LogoText>protector</LogoText>
      </LogoSection>
      <LinksSection>
        {links.map((link, idx) => (
          <Link key={idx} href="#">{link}</Link>
        ))}
        <SignUpButton href="#">Sign Up</SignUpButton>
      </LinksSection>
    </HeaderContainer>
  )
}

export default Header