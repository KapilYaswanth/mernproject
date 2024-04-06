import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, center, zoom, onClose }) {
  const mapRef = useRef();

  useEffect(() => {
    if (open) {
      const map = L.map(mapRef.current).setView([center.lat, center.long], zoom);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      L.marker([center.lat, center.long]).addTo(map);

      return () => {
        map.remove();
      };
    }
  }, [center, zoom, open]);

  if (!open) {
    return;
  }

  const content = (
    <div
      style={{
        display: 'flex',
        position: 'fixed',
        inset: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: 999
      }}
    >
      <div
        style={{
          width: '50%',
          height: '50%',
          border: '1px solid black',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'center'
        }}
      >
        <div ref={mapRef} style={{ height: '90%', width: '100%' }}></div>
        <button style={{ width: '70px', marginRight: '20px' }} onClick={onClose}>
          close
        </button>
      </div>
    </div>
  );
  // return createPortal(content, document.getElementById('drawer'))
  return content;
}

export default Modal;
