import React from 'react';
import PlaceItem from './PlaceItem';

function PlaceList({ items }) {
  if (!items.length) {
    return <div>no places found</div>;
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {items.map((place) => {
        return <PlaceItem {...place} />;
      })}
    </div>
  );
}

export default PlaceList;
