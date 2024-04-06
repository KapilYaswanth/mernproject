/* eslint-disable react/prop-types */
import UserItem from './UserItem';

function UserList({ items }) {
  if (!items.length) {
    return <p>no user found</p>;
  }
  return (
    <>
      {items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            image={user.image}
            placesVisited={user.places}
          />
        );
      })}
    </>
  );
}

export default UserList;
