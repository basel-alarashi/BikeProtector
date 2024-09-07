import { Container, Text } from "./Loading"
import SearchOffIcon from '@mui/icons-material/SearchOff';

const Empty = () => {
  return (
    <Container>
      <SearchOffIcon style={{ fontSize: 72, color: '#0F466B' }} />
      <Text>No Cases found.</Text>
    </Container>
  )
}

export default Empty