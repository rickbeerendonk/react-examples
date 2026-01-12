/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function PortalComponent() {
  const [showModal, setShowModal] = useState(false);

  const modalContent = (
    <div data-testid="modal" className="modal">
      <h3>Modal Content</h3>
      <p>This is rendered in a portal</p>
      <button onClick={() => setShowModal(false)} data-testid="close-modal-btn">
        Close
      </button>
    </div>
  );

  return (
    <div data-testid="portal-demo">
      <h2>Portal Demo</h2>
      <button onClick={() => setShowModal(true)} data-testid="open-modal-btn">
        Open Modal
      </button>

      {showModal && createPortal(modalContent, document.body)}
    </div>
  );
}
