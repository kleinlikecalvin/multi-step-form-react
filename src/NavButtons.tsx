export default function NavButtons({
  hideButton,
  isStepFourActive,
  backClick,
  nextClick,
}: {
  hideButton?: boolean;
  isStepFourActive?: boolean;
  backClick?: (event: any) => void;
  nextClick: (event: any) => void;
}) {
  return (
    <div className="NavButtons">
      {!hideButton && (
        <button className="back" onClick={backClick}>
          Go Back
        </button>
      )}
      <button className="next" onClick={nextClick}>
        {isStepFourActive ? "confirm" : "next step"}
      </button>
    </div>
  );
}
