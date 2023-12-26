import { Container } from '@mui/material';
import UserAvatar from './UserAvatar';

function UserNavigation({ firstName, lastName }) {
  return (
    <Container
      style={{
        backgroundColor: '#A9A9A9',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 0 40px 0',
        padding: '10px',
        borderRadius: '10px',
      }}
    >
      <h2 style={{ color: '#BA55D3' }}>PRODUCTOR</h2>
      <UserAvatar firstName={firstName} lastName={lastName} />
    </Container>
  );
}

export default UserNavigation;
