import "./App.css";
import closeIcon from "../images/close.svg";

export default function AboutModal({ onClose, children }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={closeIcon}
          alt="Close"
          className="modal-close-icon"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
}
