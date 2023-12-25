export default function NavButtons({
  backClick,
  nextClick,
}: {
  backClick: (event: any) => void;
  nextClick: (event: any) => void;
}) {
  return (
    <div className="NavButtons">
      <button className="back" onClick={backClick}>
        Go Back
      </button>
      <button className="next" onClick={nextClick}>
        Next Step
      </button>
    </div>
  );
}
