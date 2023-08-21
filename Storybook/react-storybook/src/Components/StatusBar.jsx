import "./StatusBar.css";
import PropTypes from "prop-types";
const StatusBar = ({ type = "info", message, onClose }) => {
  return (
    <div className={`status-bar ${type}`}>
      <span className="message">{message}</span>
      <button className="close-btn" onClick={onClose}>
        X
      </button>
    </div>
  );
};
StatusBar.propTypes = {
    type: PropTypes.oneOf(["info", "success", "warning", "error"]),
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func,
};

export default StatusBar;