import { Link, Navigate } from 'react-router-dom';

function UserItem({ id, name, email, image, placesVisited }) {
  return (
    <Link to={`${id}/places`} style={{ textDecoration: 'none' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '180px',
          justifyContent: 'space-between',
          background: 'black',
          margin: '20px',
          padding: '10px',
          borderRadius: '8px'
        }}
      >
        <img src={image} width="60px" height={'60px'} style={{ borderRadius: '40px' }} />
        <div style={{ textAlign: 'left', color: 'white' }}>
          <div>{name}</div>
          <div>{placesVisited} places</div>
        </div>
      </div>
    </Link>
  );
}

export default UserItem;
