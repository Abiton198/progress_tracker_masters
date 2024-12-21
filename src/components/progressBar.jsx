
/**
 * ProgressBar Component
 * Displays a circular progress bar that dynamically updates based on the provided progress percentage.
 * The bar changes color based on the progress level: red (0-25%), yellow (26-50%), blue (51-75%), green (76-100%).
 *
 * Props:
 * - progress (number): The completion percentage (0 to 100).
 */

const ProgressBar = ({ progress }) => {
  /**
   * Determines the color of the progress bar based on the progress percentage.
   * @param {number} progress - The progress percentage.
   * @returns {string} - The Tailwind CSS class for the color.
   */
  const getColor = (progress) => {
    if (progress <= 25) return 'text-red-500';
    if (progress <= 50) return 'text-yellow-500';
    if (progress <= 75) return 'text-blue-500';
    return 'text-green-500';
  };

  // Get the appropriate color class for the current progress.
  const progressStyle = getColor(progress);

  return (
    <div className="relative w-40 h-40 mb-6">
      {/* SVG for the circular progress bar */}
      <svg className="w-full h-full">
        {/* Background circle (gray) */}
        <circle
          cx="50%"
          cy="50%"
          r="70"
          strokeWidth="10"
          className="text-gray-300 fill-none"
        />

        {/* Foreground circle (progress indicator) */}
        <circle
          cx="50%"
          cy="50%"
          r="70"
          strokeWidth="10"
          strokeDasharray="440" // Total circumference of the circle.
          strokeDashoffset={440 - (440 * progress) / 100} // Offset based on progress.
          className={`${progressStyle} fill-none`} // Dynamic color based on progress.
          style={{ transition: 'stroke-dashoffset 0.5s ease' }} // Smooth transition for progress updates.
        />
      </svg>

      {/* Centered percentage text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold">{Math.round(progress)}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;

