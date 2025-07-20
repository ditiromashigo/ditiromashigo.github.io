import "./App.css";

export default function AboutModal({ onClose, children }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <svg
            className="modal-close-icon"
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClose}
          >
            <line x1="42.5" y1="42.5" x2="26.5" y2="26.5" />
            <line x1="42.5" y1="5.5" x2="26.5" y2="21.5" />
            <path d="M5.5,42.5,21.1716,26.8284a4,4,0,0,0,0-5.6568L5.5,5.5" />
          </svg>
        {children}
      </div>
    </div>
  );
}
