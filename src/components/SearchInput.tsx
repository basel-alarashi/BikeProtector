import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEventHandler } from "react";

interface ISearchInput {
  label: string,
  placeholder: string,
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Container = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: 4
});

const Icon = styled.span({
  position: 'absolute',
  top: '50%',
  right: 12,
  color: '#0F466B',
  transform: 'translateY(-50%)'
});

const Input = styled.input`
  width: 80%;
  padding: 12px;
  backgroundColor: transparent;
  color: #161616;
  border: 1px solid #979797;
  border-radius: 4px;
  outline: none;
  transition: border-color .3s ease;

  &::placeholder {
    color: #979797;
    font-size: 14px;
    transition: color .3s ease;
  }

  &:focus {
    border-color: #3498DB;

    &::placeholder {
      color: #3498DB;
    }
  }
`;

const Label = styled.label({
  color: '#0F466B',
  width: '20%'
});

const SearchInput = ({ label, placeholder, value, onChange }: ISearchInput) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input type="text" placeholder={placeholder} value={value} onChange={onChange} />
      <Icon><SearchIcon /></Icon>
    </Container>
  )
}

export default SearchInput