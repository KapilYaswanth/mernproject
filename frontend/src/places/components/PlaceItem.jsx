import React, { useState } from 'react';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

function PlaceItem({ imageUrl, title, description, address, location }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          width: '280px',
          background: 'black',
          margin: '20px',
          padding: '10px',
          borderRadius: '8px'
        }}
      >
        <img src={imageUrl} width="100%" height={'160px'} />
        <div style={{ textAlign: 'center', color: 'white' }}>
          <div>{title}</div>
          <div>{description}</div>
          <hr />
          <button
            onClick={() => {
              setOpen(true);
            }}
          >
            view on map
          </button>
          <button
            onClick={() => {
              navigate('/places/123');
            }}
          >
            edit
          </button>
          <button>delete</button>
        </div>
      </div>
      <Modal
        open={open}
        zoom={12}
        center={location}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}

export default PlaceItem;
