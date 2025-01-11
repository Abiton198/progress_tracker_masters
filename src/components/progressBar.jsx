import PropTypes from "prop-types";
import image from "../img/abiton.jpeg";
import "../index.css"; // Import the CSS file for styles

const ProgressBar = ({ progress }) => {
  // Clamp the progress value to be between 0 and 100
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="progress-bar-container">
      {/* Circular image */}
      <div className="progress-bar-image">
        <img src={image} alt="Progress Indicator" />
      </div>

      {/* Progress bar */}
      <div className="progress-bar-track">
        <div
          className={`progress-bar-fill`}
          style={{
            width: `${clampedProgress}%`,
            backgroundColor:
              clampedProgress <= 25
                ? "#f87171" // Red
                : clampedProgress <= 50
                ? "#facc15" // Yellow
                : clampedProgress <= 75
                ? "#60a5fa" // Blue
                : "#34d399", // Green
          }}
        ></div>
      </div>

      {/* Progress percentage */}
      <div className="progress-bar-text">{Math.round(clampedProgress)}% Completed</div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
