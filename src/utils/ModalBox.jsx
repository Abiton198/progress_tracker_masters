import PropTypes from "prop-types";
// import "../index.css"; 

/**
 * ModalBox Component
 * A reusable modal component with title, content, and close functionality.
 */
const ModalBox = ({ isVisible = false, title = "", content = null, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <h2 className="modal-title">{title}</h2>
        <div className="modal-body">{content || "No content available."}</div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

ModalBox.propTypes = {
  isVisible: PropTypes.bool, // Whether the modal is visible
  title: PropTypes.string,   // The modal title
  content: PropTypes.node,   // The modal content
  onClose: PropTypes.func.isRequired, // Function to close the modal
};

export default ModalBox;
