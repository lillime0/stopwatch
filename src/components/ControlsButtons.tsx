interface Props {
  isActive: boolean;
  isPaused: boolean;
  handleStart: () => void;
  handleReset: () => void;
  handlePauseResume: () => void;
}

export default function ControlsButtons({
  isActive,
  isPaused,
  handleStart,
  handleReset,
  handlePauseResume
}: Props) {
  return (
    <div className="control-buttons">
      {isActive ? (
        <div className="reset-resume-btn">
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
          <button className="resume" onClick={handlePauseResume}>
            {isPaused ? "Resume" : "Pause"}
          </button>
        </div>
      ) : (
        <button className="start-btn" onClick={handleStart}>
          Start
        </button>
      )}
    </div>
  );
}
